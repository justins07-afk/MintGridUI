"use client";

import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownLeft, Wallet, CreditCard, Activity } from 'lucide-react';

export function HeroDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden perspective-1000"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Top Bar */}
            <div className="border-b border-zinc-800 bg-zinc-900/50 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="h-2 w-32 rounded-full bg-zinc-800" />
            </div>

            {/* Main Content Grid */}
            <div className="p-6 grid grid-cols-3 gap-4">

                {/* Total Balance Card */}
                <div className="col-span-3 md:col-span-2 space-y-4">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-zinc-800 bg-zinc-800/30 p-5 backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-zinc-400 text-xs uppercase font-medium">Total Balance</p>
                                <h3 className="text-3xl font-bold text-white mt-1">$124,592.00</h3>
                                <div className="flex items-center gap-1 mt-2 text-mint-500 text-sm">
                                    <ArrowUpRight className="h-4 w-4" />
                                    <span>+2.4% this month</span>
                                </div>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-mint-500/10 flex items-center justify-center text-mint-500">
                                <Wallet className="h-5 w-5" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-zinc-800 p-4 hover:bg-zinc-750 transition-colors cursor-pointer border border-zinc-700/50">
                            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                                <CreditCard className="h-4 w-4" />
                            </div>
                            <p className="text-sm font-medium text-white">Cards</p>
                            <p className="text-xs text-zinc-500">Manage 3 cards</p>
                        </div>
                        <div className="rounded-lg bg-zinc-800 p-4 hover:bg-zinc-750 transition-colors cursor-pointer border border-zinc-700/50">
                            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                                <Activity className="h-4 w-4" />
                            </div>
                            <p className="text-sm font-medium text-white">Activity</p>
                            <p className="text-xs text-zinc-500">View analytics</p>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions List */}
                <div className="col-span-3 md:col-span-1 rounded-lg border border-zinc-800 bg-zinc-800/10 p-4">
                    <p className="text-zinc-400 text-xs uppercase font-medium mb-4">Recent</p>
                    <div className="space-y-3">
                        {[
                            { name: "Stripe", amount: "+$2,400.00", color: "text-mint-500", icon: ArrowUpRight },
                            { name: "AWS", amount: "-$64.00", color: "text-zinc-300", icon: ArrowDownLeft },
                            { name: "Figma", amount: "-$12.00", color: "text-zinc-300", icon: ArrowDownLeft },
                            { name: "Vercel", amount: "-$20.00", color: "text-zinc-300", icon: ArrowDownLeft },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="flex items-center justify-between text-sm"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                                        <item.icon className="h-3 w-3" />
                                    </div>
                                    <span className="text-zinc-200">{item.name}</span>
                                </div>
                                <span className={item.color}>{item.amount}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-mint-500/5 blur-[100px] -z-10 pointer-events-none" />
        </motion.div>
    );
}
