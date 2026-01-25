import RadialCursor from "../components/RadialCursor.tsx";
import {Link} from "react-router-dom";

const _404 = () => {
    return (
        <div className="__variable_20b187 group/spotlight relative">
            <RadialCursor />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <a
                    href="#content"
                    className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
                >
                    Skip to Content
                </a>
                <div className="lg:flex lg:justify-between lg:gap-4">
                    {/*<Header />*/}
                    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                        <div>
                            <h1
                                style={{
                                    display: "inline-block",
                                    margin: "0 20px 0 0",
                                    paddingRight: "23px",
                                    fontSize: "24px",
                                    fontWeight: 500,
                                    verticalAlign: "top",
                                    lineHeight: "49px"
                                }}
                            >
                                404
                            </h1>
                            <div style={{ display: "inline-block", textAlign: "left" }}>
                                <h2
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        lineHeight: "49px",
                                        margin: 0
                                    }}
                                >
                                    This page could not be found.
                                </h2>
                                <h4 className={"gradient-text"}>
                                    <Link to={'/'}>Go back to homepage</Link>
                                </h4>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default _404;
