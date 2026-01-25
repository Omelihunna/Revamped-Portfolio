import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    rootMargin?: string;
}

const ScrollAnimation = ({ 
    children, 
    className = '', 
    threshold = 0.1, 
    rootMargin = '0px 0px -50px 0px' 
}: ScrollAnimationProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin]);

    return (
        <div 
            ref={ref} 
            className={`animate-on-scroll ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation; 