"use client";

import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'motion/react';
import { Palette, Box, CreditCard, BarChart3, Layout } from 'lucide-react';

const features = [
    {
        title: "Fondations",
        desc: "Couleurs (light/dark), typographie, spacing, variables Figma locales.",
        icon: Palette
    },
    {
        title: "Composants UI",
        desc: "Buttons, inputs, dropdowns, modals, tabs, badges... +50 composants de base.",
        icon: Box
    },
    {
        title: "Composants Fintech",
        desc: "Cartes de comptes, soldes, transactions, statuts, cards IBAN/CB.",
        icon: CreditCard
    },
    {
        title: "Data & Dashboards",
        desc: "Graphiques, tableaux, KPI blocks, filters, pagination, areas.",
        icon: BarChart3
    },
    {
        title: "Templates d'écrans",
        desc: "Dashboard principal, portefeuille, historique, KYC, flux de transfert.",
        icon: Layout
    }
];

export function KitContent() {
    return (
        <Section className="bg-zinc-950 border-t border-zinc-900">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ce que tu obtiens avec MintGrid UI.</h2>
                <p className="text-lg text-zinc-400">
                    Un système complet, atomique et évolutif.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Card className="h-full border-zinc-900 bg-zinc-900/40 hover:bg-zinc-900/80">
                            <CardHeader>
                                <div className="h-10 w-10 rounded-lg bg-mint-500/10 flex items-center justify-center text-mint-500 mb-4">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                                <CardDescription className="text-base text-zinc-400 mt-2">
                                    {item.desc}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
