"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MintGridLogo } from '@/components/icons/mintgrid-logo';
import { motion } from 'motion/react';

export function SiteHeader() {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-md"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                        <MintGridLogo className="h-5 w-5 text-mint-500" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">MintGrid UI</span>
                </Link>

                {/* Desktop Nav - placeholder for future links */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
                    <Link href="#features" className="hover:text-mint-400 transition-colors">Features</Link>
                    <Link href="#pricing" className="hover:text-mint-400 transition-colors">Pricing</Link>
                    <Link href="#faq" className="hover:text-mint-400 transition-colors">FAQ</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white hidden sm:block">
                        Sign In
                    </Link>
                    <Button size="sm" className="bg-mint-500 hover:bg-mint-400 text-zinc-950 font-semibold">
                        Get Early Access
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
