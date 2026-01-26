"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";
import { cn } from "../lib/utils";

/**
 * SparklesText - Adds sparkle effects to text for attention
 * Psychology: Creates excitement and premium feel
 */
export function SparklesText({
    children,
    className = "",
    sparkleColor = "#8b5cf6",
}: {
    children: ReactNode;
    className?: string;
    sparkleColor?: string;
}) {
    return (
        <span className={cn("relative inline-block", className)}>
            {children}
            <span className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            background: sparkleColor,
                            boxShadow: `0 0 6px ${sparkleColor}, 0 0 12px ${sparkleColor}`,
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 30}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </span>
        </span>
    );
}

/**
 * WordRotate - Rotates through words for engagement
 * Psychology: Keeps attention, shows versatility
 */
export function WordRotate({
    words,
    className = "",
    duration = 3000,
}: {
    words: string[];
    className?: string;
    duration?: number;
}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, duration);
        return () => clearInterval(interval);
    }, [words.length, duration]);

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={words[index]}
                className={cn("inline-block", className)}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5 }}
            >
                {words[index]}
            </motion.span>
        </AnimatePresence>
    );
}

/**
 * ShineBorder - Animated shine effect on borders
 * Psychology: Premium feel, draws attention to CTAs
 */
export function ShineBorder({
    children,
    className = "",
    borderRadius = "9999px",
    duration = 3,
}: {
    children: ReactNode;
    className?: string;
    borderRadius?: string;
    duration?: number;
}) {
    return (
        <div
            className={cn("relative overflow-hidden p-[2px]", className)}
            style={{ borderRadius }}
        >
            <motion.div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), rgba(217, 70, 239, 0.8), transparent)",
                    borderRadius,
                }}
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <div
                className="relative bg-[#0a0a0f] z-10"
                style={{ borderRadius }}
            >
                {children}
            </div>
        </div>
    );
}

/**
 * NumberTicker - Animated counting numbers
 * Psychology: Creates credibility, shows growth
 */
export function NumberTicker({
    value,
    className = "",
    delay = 0,
}: {
    value: number;
    className?: string;
    delay?: number;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const interval = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return <span className={className}>{count.toLocaleString()}</span>;
}

/**
 * BlurIn - Text blur reveal animation
 * Psychology: Creates anticipation, focuses attention
 */
export function BlurIn({
    children,
    className = "",
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    );
}

/**
 * BorderBeam - Animated beam traveling around border
 * Psychology: Draws eye, creates dynamic feel
 */
export function BorderBeam({
    children,
    className = "",
    duration = 6,
    borderWidth = 2,
}: {
    children: ReactNode;
    className?: string;
    duration?: number;
    borderWidth?: number;
}) {
    return (
        <div className={cn("relative overflow-hidden rounded-2xl", className)}>
            <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                    background: `conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(139, 92, 246, 0.6) 70%, rgba(217, 70, 239, 0.6) 80%, transparent 90%, transparent 100%)`,
                    padding: borderWidth,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative bg-[#0a0a0f] rounded-2xl z-10 h-full">
                {children}
            </div>
        </div>
    );
}

/**
 * AnimatedGradientText - Gradient that animates
 * Psychology: Eye-catching, premium feel
 */
export function AnimatedGradientText({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.span
            className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-[length:200%_100%]",
                className
            )}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {children}
        </motion.span>
    );
}

/**
 * Particles - Floating background particles
 * Psychology: Creates atmosphere, premium feel
 */
export function Particles({
    count = 30,
    className = "",
}: {
    count?: number;
    className?: string;
}) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {[...Array(count)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-violet-500/30"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

/**
 * PulsatingButton - Button with pulse effect
 * Psychology: Urgency, action-oriented
 */
export function PulsatingButton({
    children,
    className = "",
    onClick,
}: {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <motion.button
            className={cn(
                "relative px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold text-white",
                className
            )}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}

/**
 * GlowingCard - Card with glowing border effect
 * Psychology: Premium, highlights important content
 */
export function GlowingCard({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={cn(
                "relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10",
                className
            )}
            whileHover={{
                borderColor: "rgba(139, 92, 246, 0.5)",
                boxShadow: "0 0 40px rgba(139, 92, 246, 0.2)",
            }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}
