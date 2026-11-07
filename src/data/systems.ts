/* ------------------------------------------------------------------ *
 * Types — one spec per project, rendered by one component.
 * ------------------------------------------------------------------ */

export type NodeState = "ok" | "busy" | "alert" | "down" | "standby";
export type EdgeState = "flow" | "heavy" | "paused";
export type Pt = [number, number];

export interface SysNode {
    id: string;
    kicker: string;
    label: string;
    group: string;
    x: number;
    y: number;
}

export interface SysEdge {
    id: string;
    pts: Pt[];
}

export interface Mode {
    id: string;
    tab: string;
    caption: string;
    readout: { k: string; v: string }[];
    log: string[];
    nodes?: Record<string, NodeState>;
    edges?: Record<string, EdgeState>;
}

export interface SystemSpec {
    name: string;
    stack: string;
    /** Set when the architecture is inferred rather than documented. Rendered as a warning chip. */
    note?: string;
    viewBox: string;
    nodeW: number;
    nodeH: number;
    nodes: SysNode[];
    edges: SysEdge[];
    modes: Mode[];
}

/* ------------------------------------------------------------------ *
 * KlasStack — multi-tenant school management SaaS.
 * Node states default to "ok" and edges to "flow"; each mode lists
 * only what differs from steady state.
 * ------------------------------------------------------------------ */

export const KLASSTACK: SystemSpec = {
    name: "KlasStack",
    stack: "NestJS · Next.js · React Native · MySQL · Redis/BullMQ",
    viewBox: "0 0 910 300",
    nodeW: 140,
    nodeH: 52,
    nodes: [
        { id: "admin", kicker: "WEB", label: "Admin Portal", group: "Clients", x: 20, y: 36 },
        { id: "parent", kicker: "WEB", label: "Parent Portal", group: "Clients", x: 20, y: 112 },
        { id: "mobile", kicker: "MOBILE", label: "Companion App", group: "Clients", x: 20, y: 188 },
        { id: "tenant", kicker: "MIDDLEWARE", label: "Tenant Resolver", group: "Edge", x: 220, y: 112 },
        { id: "api", kicker: "NESTJS", label: "Modular Monolith", group: "Core", x: 410, y: 112 },
        { id: "mysql", kicker: "MYSQL", label: "Tenant Databases", group: "Data", x: 750, y: 36 },
        { id: "redis", kicker: "REDIS", label: "BullMQ Queues", group: "Data", x: 580, y: 224 },
        { id: "workers", kicker: "WORKERS", label: "Job Processors", group: "Data", x: 750, y: 224 },
    ],
    edges: [
        { id: "e1", pts: [[160, 62], [190, 62], [190, 138], [220, 138]] },
        { id: "e2", pts: [[160, 138], [220, 138]] },
        { id: "e3", pts: [[160, 214], [190, 214], [190, 138], [220, 138]] },
        { id: "e4", pts: [[360, 138], [410, 138]] },
        { id: "e5", pts: [[550, 138], [660, 138], [660, 62], [750, 62]] },
        { id: "e6", pts: [[480, 164], [480, 250], [580, 250]] },
        { id: "e7", pts: [[720, 250], [750, 250]] },
        { id: "e8", pts: [[820, 224], [820, 88]] },
    ],
    modes: [
        {
            id: "steady",
            tab: "Steady state",
            caption:
                "Every request resolves its tenant before a module touches data. One deployment, isolated databases.",
            readout: [
                { k: "p95", v: "142 ms" },
                { k: "queue depth", v: "18" },
                { k: "active tenants", v: "240" },
                { k: "writes", v: "OK" },
            ],
            log: [
                "14:02:11  tenant.resolve      st-marys-college   ok  3 ms",
                "14:02:11  fees.invoice.issue  queued             job 88412",
                "14:02:12  results.approve     committed          term 2",
            ],
        },
        {
            id: "peak",
            tab: "Term start",
            caption:
                "Enrolment and bulk result imports land together. Heavy work moves to the queue so the request path stays responsive.",
            readout: [
                { k: "p95", v: "310 ms" },
                { k: "queue depth", v: "1,240" },
                { k: "active tenants", v: "240" },
                { k: "workers", v: "8 / 8" },
            ],
            log: [
                "08:41:03  import.results.bulk  queued   14,880 rows",
                "08:41:03  worker.pool          scaled   4 to 8",
                "08:41:09  api.throttle         applied  120 rpm per tenant",
            ],
            nodes: { admin: "busy", parent: "busy", api: "busy", mysql: "busy", redis: "busy", workers: "busy" },
            edges: { e1: "heavy", e2: "heavy", e6: "heavy", e7: "heavy" },
        },
        {
            id: "backpressure",
            tab: "Queue backpressure",
            caption:
                "The queue absorbs the spike. Reads keep serving while writes drain at a rate the database can actually take.",
            readout: [
                { k: "p95", v: "189 ms" },
                { k: "queue depth", v: "24,610" },
                { k: "reads", v: "OK" },
                { k: "writes", v: "deferred" },
            ],
            log: [
                "09:12:44  bullmq.depth         24,610     above threshold",
                "09:12:44  fees.invoice.issue   deferred   retry in 30 s",
                "09:12:45  api.read             unaffected 94% replica hits",
            ],
            nodes: { api: "busy", redis: "alert", workers: "busy" },
            edges: { e6: "heavy", e7: "heavy", e8: "heavy" },
        },
        {
            id: "failover",
            tab: "Primary failover",
            caption:
                "Primary is unreachable. Reads fall to the replica and writes buffer in BullMQ instead of erroring back to the client.",
            readout: [
                { k: "p95", v: "—" },
                { k: "queue depth", v: "3,420" },
                { k: "reads", v: "replica" },
                { k: "writes", v: "paused" },
            ],
            log: [
                "03:27:02  mysql.primary  unreachable  3 failed probes",
                "03:27:02  reads          rerouted     replica-1",
                "03:27:03  worker.pool    paused       drain on recovery",
            ],
            nodes: { mysql: "down", api: "alert", redis: "busy", workers: "standby" },
            edges: { e5: "paused", e8: "paused", e6: "heavy" },
        },
    ],
};

/* ------------------------------------------------------------------ *
 * Descriptomizer — e-commerce behavioural analytics.
 * A pipeline rather than a request path: fan-in at the edge, batch in
 * the middle, query at the end. Same spec shape, different topology.
 * ------------------------------------------------------------------ */

export const DESCRIPTOMIZER: SystemSpec = {
    name: "Descriptomizer",
    stack: "AWS · SQL · Cron · AI report models",
    viewBox: "0 0 910 300",
    nodeW: 140,
    nodeH: 52,
    nodes: [
        { id: "pixel", kicker: "BROWSER", label: "Tracking Pixel", group: "01 Collect", x: 20, y: 60 },
        { id: "collect", kicker: "AWS", label: "Ingest Endpoint", group: "01 Collect", x: 200, y: 60 },
        { id: "raw", kicker: "S3", label: "Raw Event Store", group: "02 Store", x: 380, y: 60 },
        { id: "cron", kicker: "CRON", label: "Rollup Jobs", group: "03 Aggregate", x: 380, y: 200 },
        { id: "warehouse", kicker: "SQL", label: "SQL Warehouse", group: "03 Aggregate", x: 560, y: 60 },
        { id: "ai", kicker: "MODEL", label: "Report Models", group: "04 Report", x: 560, y: 200 },
        { id: "dash", kicker: "WEB", label: "Client Dashboard", group: "04 Report", x: 740, y: 60 },
    ],
    edges: [
        { id: "e1", pts: [[160, 86], [200, 86]] },
        { id: "e2", pts: [[340, 86], [380, 86]] },
        { id: "e3", pts: [[450, 112], [450, 200]] },
        { id: "e4", pts: [[520, 226], [540, 226], [540, 86], [560, 86]] },
        { id: "e5", pts: [[630, 112], [630, 200]] },
        { id: "e6", pts: [[700, 226], [810, 226], [810, 112]] },
        { id: "e7", pts: [[700, 86], [740, 86]] },
    ],
    modes: [
        {
            id: "steady",
            tab: "Steady state",
            caption:
                "Pixels post to a thin ingest endpoint and raw events land first. Nothing is computed on the request path, so a traffic spike never reaches the warehouse.",
            readout: [
                { k: "events / min", v: "4,200" },
                { k: "ingest lag", v: "2 s" },
                { k: "last rollup", v: "04:00" },
                { k: "reports", v: "current" },
            ],
            log: [
                "12:40:02  ingest.batch     accepted   512 events",
                "12:40:02  raw.write        s3         dt=2026-11-06",
                "12:40:05  dashboard.query  warehouse  118 ms",
            ],
        },
        {
            id: "peak",
            tab: "Peak traffic",
            caption:
                "Black Friday. Ingest scales out on its own while the warehouse sits idle — the collection path and the query path share nothing.",
            readout: [
                { k: "events / min", v: "61,800" },
                { k: "ingest lag", v: "6 s" },
                { k: "last rollup", v: "04:00" },
                { k: "reports", v: "current" },
            ],
            log: [
                "11:04:17  ingest.autoscale  4 to 14 tasks",
                "11:04:17  ingest.batch      accepted  8,140 events",
                "11:04:19  warehouse         idle      no write path",
            ],
            nodes: { pixel: "busy", collect: "busy", raw: "busy" },
            edges: { e1: "heavy", e2: "heavy" },
        },
        {
            id: "rollup",
            tab: "Nightly rollup",
            caption:
                "The 04:00 batch. Rewritten to scan partitions instead of the full table, which is where the 43% came from.",
            readout: [
                { k: "events / min", v: "180" },
                { k: "rollup", v: "running" },
                { k: "elapsed", v: "07:12" },
                { k: "plan", v: "partition scan" },
            ],
            log: [
                "04:00:00  rollup.start     14 clients  partition scan",
                "04:07:12  rollup.sessions  committed   8.4M rows",
                "04:07:12  query.plan       index scan  was full scan",
            ],
            nodes: { raw: "busy", cron: "busy", warehouse: "busy" },
            edges: { e3: "heavy", e4: "heavy" },
        },
        {
            id: "backfill",
            tab: "Gap backfill",
            caption:
                "A client's tag stopped firing for six hours. The raw store still holds the window, so the rollup replays it instead of losing the day.",
            readout: [
                { k: "gap", v: "06:12" },
                { k: "source", v: "raw store" },
                { k: "replayed", v: "1.2M events" },
                { k: "reports", v: "rebuilding" },
            ],
            log: [
                "09:15:40  monitor.gap    client 118  06:12 missing",
                "09:15:41  pixel.health   no beacon   tag removed",
                "09:16:02  rollup.replay  from s3     1,204,880 events",
            ],
            nodes: { pixel: "down", cron: "busy", warehouse: "busy", ai: "busy" },
            edges: { e1: "paused", e3: "heavy", e4: "heavy", e5: "heavy" },
        },
    ],
};

/* ------------------------------------------------------------------ *
 * Collection God — receivables collection, non-custodial.
 *
 * Read from the actual repo (~/Desktop/Projects/Collection-god), not
 * inferred: docs/04-technical-skeleton.md for the topology and
 * docs/09-matching-engine.md for the pipeline and its failure states.
 *
 * The shape that matters: one NestJS codebase with two entrypoints —
 * main.ts serves HTTP and inbound webhooks, worker.ts drains the
 * outbox and runs the matcher. Matching never runs inline in a webhook
 * handler, so the modes below are about what the worker decides.
 * ------------------------------------------------------------------ */

export const COLLECTION_GOD: SystemSpec = {
    name: "Collection God",
    stack: "NestJS · Postgres 16 · BullMQ · Paystack / Monnify / Korapay",
    viewBox: "0 0 910 330",
    nodeW: 150,
    nodeH: 52,
    nodes: [
        { id: "providers", kicker: "EXTERNAL", label: "Payment Providers", group: "01 Surfaces", x: 25, y: 30 },
        { id: "checkout", kicker: "SSR", label: "Payer Checkout", group: "01 Surfaces", x: 25, y: 140 },
        { id: "dashboard", kicker: "NEXT.JS", label: "Merchant Console", group: "01 Surfaces", x: 25, y: 250 },
        { id: "api", kicker: "NESTJS", label: "API + Webhooks", group: "02 Core", x: 265, y: 140 },
        { id: "outbox", kicker: "POSTGRES", label: "Outbox Events", group: "02 Core", x: 505, y: 140 },
        { id: "worker", kicker: "BULLMQ", label: "Matcher Worker", group: "03 Processing", x: 745, y: 140 },
        { id: "ledger", kicker: "POSTGRES", label: "Posting Ledger", group: "04 Record", x: 505, y: 250 },
        { id: "exceptions", kicker: "OPS", label: "Exception Queue", group: "04 Record", x: 745, y: 250 },
    ],
    edges: [
        { id: "e1", pts: [[175, 56], [215, 56], [215, 166], [265, 166]] },
        { id: "e2", pts: [[175, 166], [265, 166]] },
        { id: "e3", pts: [[175, 276], [215, 276], [215, 166], [265, 166]] },
        { id: "e4", pts: [[415, 166], [505, 166]] },
        { id: "e5", pts: [[655, 154], [745, 154]] },
        { id: "e6", pts: [[745, 180], [700, 180], [700, 276], [655, 276]] },
        { id: "e7", pts: [[820, 192], [820, 250]] },
    ],
    modes: [
        {
            id: "steady",
            tab: "Steady state",
            caption:
                "An observation never matches inline. The API commits the row, its outbox event and the audit record in one transaction; the worker does the matching afterwards.",
            readout: [
                { k: "matched today", v: "1,184" },
                { k: "auto-match", v: "94%" },
                { k: "exceptions", v: "12" },
                { k: "ledger", v: "balanced" },
            ],
            log: [
                "14:02:11  webhook.paystack  observation       obs_01jc..",
                "14:02:11  uow.commit        txn+outbox+audit  one tx",
                "14:02:13  match.auto        intent ref        confidence 1.00",
            ],
        },
        {
            id: "duplicate",
            tab: "Duplicate sighting",
            caption:
                "The same payment arrives as a webhook, then again in a statement import. Observations re-parent onto one transaction — nothing is deleted, and the merge reverses.",
            readout: [
                { k: "observations", v: "3" },
                { k: "transactions", v: "1" },
                { k: "merge", v: "deterministic" },
                { k: "rows deleted", v: "0" },
            ],
            log: [
                "09:41:02  statement.import    412 lines",
                "09:41:07  dedupe.match        session ref  deterministic",
                "09:41:07  observation.attach  txn_01jb..   no new txn",
            ],
            nodes: { worker: "busy" },
            edges: { e5: "heavy" },
        },
        {
            id: "unmatched",
            tab: "Low confidence",
            caption:
                "A statement line with a sender name and a narration, no reference. Below threshold it does not guess — it opens a typed exception, and learns a hint from however a human resolves it.",
            readout: [
                { k: "confidence", v: "0.42" },
                { k: "threshold", v: "0.90" },
                { k: "allocated", v: "0" },
                { k: "queued", v: "1" },
            ],
            log: [
                "11:20:44  match.score     0.42    name + amount only",
                "11:20:44  match.decide    review  below threshold",
                "11:20:44  exception.open  unmatched_payment",
            ],
            nodes: { worker: "alert", exceptions: "alert" },
            edges: { e6: "paused", e7: "heavy" },
        },
        {
            id: "provider",
            tab: "Provider degraded",
            caption:
                "One provider stops responding. Checkout routes to the next one whose capability matrix covers the method, and the idempotency key on the original intent keeps a late success from double-charging.",
            readout: [
                { k: "providers", v: "1 of 3 down" },
                { k: "routed to", v: "Monnify" },
                { k: "double charges", v: "0" },
                { k: "intents held", v: "208" },
            ],
            log: [
                "03:27:02  provider.health  paystack  unreachable",
                "03:27:02  routing.select   monnify   capability match",
                "03:27:03  idempotency      key held  replay safe",
            ],
            nodes: { providers: "down", api: "alert" },
            edges: { e1: "paused" },
        },
    ],
};

/* ------------------------------------------------------------------ *
 * Thorero — operational governance platform (thorero.com).
 *
 * Read from ~/Desktop/Projects/thorero: thorero-be/README.md for the
 * topology and thorero-be/src/modules for the surface area (permits,
 * gate passes, man-hours, emergency drills, inspections, depot stock —
 * around thirty modules on one API).
 *
 * "Storage unavailable" is not invented: the README documents that file
 * routes answer 503 STORAGE_UNAVAILABLE when the S3 credentials are
 * absent, while the rest of the API keeps serving.
 * ------------------------------------------------------------------ */

export const THORERO: SystemSpec = {
    name: "Thorero",
    stack: "NestJS 12 · Supabase Postgres · Redis · S3 · WebAuthn",
    viewBox: "0 0 910 330",
    nodeW: 150,
    nodeH: 52,
    nodes: [
        { id: "auth", kicker: "IDENTITY", label: "Google + WebAuthn", group: "01 Surfaces", x: 25, y: 30 },
        { id: "web", kicker: "TANSTACK", label: "Ops Console", group: "01 Surfaces", x: 25, y: 140 },
        { id: "api", kicker: "NESTJS", label: "NestJS API v1", group: "02 Edge", x: 265, y: 140 },
        { id: "redis", kicker: "REDIS", label: "Queues + Limits", group: "03 Platform", x: 265, y: 250 },
        { id: "workers", kicker: "QUEUE", label: "Job Workers", group: "03 Platform", x: 505, y: 250 },
        { id: "db", kicker: "RLS", label: "Supabase Postgres", group: "04 Data", x: 745, y: 30 },
        { id: "storage", kicker: "S3", label: "Private Files", group: "04 Data", x: 745, y: 140 },
        { id: "mail", kicker: "SMTP", label: "Notifications", group: "04 Data", x: 745, y: 250 },
    ],
    edges: [
        { id: "e1", pts: [[175, 56], [220, 56], [220, 166], [265, 166]] },
        { id: "e2", pts: [[175, 166], [265, 166]] },
        { id: "e3", pts: [[415, 154], [580, 154], [580, 56], [745, 56]] },
        { id: "e4", pts: [[415, 178], [745, 178]] },
        { id: "e5", pts: [[340, 192], [340, 250]] },
        { id: "e6", pts: [[415, 276], [505, 276]] },
        { id: "e7", pts: [[655, 276], [745, 276]] },
    ],
    modes: [
        {
            id: "steady",
            tab: "Steady state",
            caption:
                "Twenty-five-plus disciplines on one API — permits, inspections, incidents, man-hours, emergency drills. Every query carries the organisation through row-level security.",
            readout: [
                { k: "modules", v: "~30" },
                { k: "isolation", v: "row-level" },
                { k: "storage", v: "private" },
                { k: "auth", v: "WebAuthn" },
            ],
            log: [
                "08:14:02  auth.webauthn  key verified  rp thorero",
                "08:14:02  rls.context    org_01h2..    set local",
                "08:14:03  permits.list   24 rows       scoped",
            ],
        },
        {
            id: "isolation",
            tab: "Tenant isolation",
            caption:
                "A second organisation hits the same deployment. The policy lives on the table, so a forgotten filter in application code still cannot leak rows across tenants.",
            readout: [
                { k: "organisations", v: "2 active" },
                { k: "cross-tenant rows", v: "0" },
                { k: "policy", v: "every table" },
                { k: "enforced at", v: "database" },
            ],
            log: [
                "08:21:40  rls.context  org_01k9..  set local",
                "08:21:40  query.scan   permits     policy applied",
                "08:21:40  result       0 rows      other org invisible",
            ],
            nodes: { api: "busy", db: "busy" },
            edges: { e3: "heavy" },
        },
        {
            id: "storage",
            tab: "Storage unavailable",
            caption:
                "Object storage credentials are absent or unreachable. File routes answer 503 rather than half-succeeding, and every other route keeps serving.",
            readout: [
                { k: "file routes", v: "503" },
                { k: "other routes", v: "OK" },
                { k: "partial writes", v: "0" },
                { k: "code", v: "STORAGE_UNAVAILABLE" },
            ],
            log: [
                "13:02:55  storage.probe  s3 endpoint  unreachable",
                "13:02:55  files.upload   503          STORAGE_UNAVAILABLE",
                "13:02:56  permits.list   200          unaffected",
            ],
            nodes: { storage: "down", api: "alert" },
            edges: { e4: "paused" },
        },
        {
            id: "ratelimit",
            tab: "Rate limited",
            caption:
                "A client hammers one endpoint. The limiter counts in Redis, so the ceiling holds across every API instance instead of once per process.",
            readout: [
                { k: "limiter", v: "Redis" },
                { k: "scope", v: "org + route" },
                { k: "rejected", v: "429" },
                { k: "ceiling", v: "shared" },
            ],
            log: [
                "16:40:11  ratelimit.hit  inspections  120/min",
                "16:40:11  response       429          retry-after 18",
                "16:40:12  cache.serve    bulletins    redis hit",
            ],
            nodes: { api: "busy", redis: "busy" },
            edges: { e5: "heavy" },
        },
    ],
};
