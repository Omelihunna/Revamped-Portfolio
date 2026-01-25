import { useState, useEffect } from 'react';

export default function RadialCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX + window.scrollX,
                y: e.clientY + window.scrollY
            });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <>
            {/* Primary gradient layer */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-all duration-500 ease-out lg:absolute"
                style={{
                    opacity: isVisible ? 1 : 0,
                    background: `radial-gradient(800px at ${position.x}px ${position.y}px, rgba(102, 126, 234, 0.15), transparent 80%)`
                }}
            />
            
            {/* Secondary accent layer */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-all duration-700 ease-out lg:absolute"
                style={{
                    opacity: isVisible ? 0.7 : 0,
                    background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(118, 75, 162, 0.1), transparent 70%)`
                }}
            />
            
            {/* Tertiary highlight layer */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-all duration-300 ease-out lg:absolute"
                style={{
                    opacity: isVisible ? 0.5 : 0,
                    background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(240, 147, 251, 0.08), transparent 60%)`
                }}
            />
            
            {/* Cursor dot */}
            <div
                className="pointer-events-none fixed z-40 h-4 w-4 rounded-full transition-all duration-200 ease-out lg:absolute"
                style={{
                    left: position.x - 8,
                    top: position.y - 8,
                    opacity: isVisible ? 0.3 : 0,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)',
                    transform: 'scale(1)',
                }}
            />
        </>
    );
}
