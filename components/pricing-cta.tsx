"use client";

import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'motion/react';

export function PricingCTA() {
    return (
        <Section className="bg-zinc-950 py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-extrabold text-white mb-6"
                >
                    Early access pour les premiers <br className="hidden md:block" />
                    <span className="text-gradient-mint">fintech builders</span>.
                </motion.h2>

                <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                    Rejoignez la liste d'attente pour bénéficier d'un prix de lancement réduit et influencer la roadmap du produit.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-md mx-auto"
                >
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Input
                            type="email"
                            placeholder="votre@email.com"
                            className="h-12 bg-zinc-900/50 border-zinc-700 focus-visible:ring-mint-500"
                        />
                        <Button size="lg" className="bg-mint-500 hover:bg-mint-400 text-zinc-900 font-bold h-12 px-8">
                            Rejoindre
                        </Button>
                    </div>
                    <p className="text-sm text-zinc-600 mt-4">
                        Pas de spam. Tu recevras uniquement des infos sur le lancement.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}
