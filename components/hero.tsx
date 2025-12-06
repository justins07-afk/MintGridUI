"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Section } from '@/components/ui/section';
import { HeroDashboard } from '@/components/hero-dashboard';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { client } from '@/sanity/lib/client';

export function Hero() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const query = `*[_type == "hero"][0]`;
        client.fetch(query).then((result: any) => {
            if (result) setData(result);
        }).catch(console.error);
    }, []);

    // Fallback data
    const title = data?.title || "MintGrid UI — Le design system pensé pour la Fintech.";
    const intro = data?.intro || "Accélère la création d’apps fintech avec des composants Figma prêts à l’emploi : tableaux de bord, flux de transactions, cartes, dark mode et data visualisation.";
    const badge = data?.badgeText || "v1.0 Early Access is coming";

    // Parse title for styling (simple split for demo, ideally portable text)
    const titleParts = title.split('Fintech');

    return (
        <div className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32 bg-zinc-950">

            {/* Background Grid/Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

            <Section className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text & CTA */}
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center rounded-full border border-mint-500/30 bg-mint-500/10 px-3 py-1 text-xs font-medium text-mint-400 mb-6">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500"></span>
                                </span>
                                {badge}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                                {titleParts[0]}
                                <span className="text-gradient-mint">Fintech</span>
                                {titleParts[1]}
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-zinc-400 leading-relaxed max-w-lg"
                        >
                            {intro}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 mt-4"
                        >
                            <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input type="email" placeholder="votre@email.com" className="bg-zinc-900 border-zinc-800 focus-visible:ring-mint-500/50" />
                                <Button className="bg-mint-600 hover:bg-mint-500 text-white font-bold shrink-0">
                                    Rejoindre
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-6 mt-4 text-sm text-zinc-500"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-mint-500" />
                                <span>Figma + React Code</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-mint-500" />
                                <span>Mises à jour à vie</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative flex justify-center lg:justify-end">
                        <HeroDashboard />
                    </div>
                </div>
            </Section>
        </div>
    );
}
