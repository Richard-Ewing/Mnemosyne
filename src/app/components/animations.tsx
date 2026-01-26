"use client";

import { useEffect, useRef, useState, RefObject } from "react";

/**
 * Hook for scroll-triggered animations using Intersection Observer
 * Returns a ref and visibility state for the element
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px"
): [RefObject<T | null>, boolean] {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element); // Only animate once
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return [ref, isVisible];
}

/**
 * Animated section wrapper component
 */
interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in";
    delay?: number;
}

export function AnimatedSection({
    children,
    className = "",
    animation = "fade-up",
    delay = 0,
}: AnimatedSectionProps) {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

    const animationClass = {
        "fade-up": "animate-fade-up",
        "fade-left": "animate-fade-left",
        "fade-right": "animate-fade-right",
        "scale-in": "animate-scale-in",
    }[animation];

    return (
        <div
            ref={ref}
            className={`${animationClass} ${isVisible ? "is-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}

/**
 * Animated capsule/pill component with glow effect
 */
interface CapsuleProps {
    children: React.ReactNode;
    className?: string;
    glow?: boolean;
}

export function Capsule({ children, className = "", glow = false }: CapsuleProps) {
    return (
        <span className={`capsule ${glow ? "capsule-glow" : ""} ${className}`}>
            {children}
        </span>
    );
}

/**
 * Animated card with hover glow effect
 */
interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
    return (
        <div className={`card-glow p-6 md:p-8 ${className}`}>
            {children}
        </div>
    );
}
