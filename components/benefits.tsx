"use client";

import { Section } from '@/components/ui/section';
import { motion } from 'motion/react';
import { Zap, LayoutGrid, TrendingUp } from 'lucide-react';

const benefits = [
    {
        title: "Ship plus vite",
        desc: "De l'idée à une UI complète en quelques jours. Plus besoin de designer chaque input.",
        icon: Zap
    },
    {
        title: "Constance visuelle",
        desc: "Chaque nouvelle page reste alignée avec le système. Fini les 50 nuances de gris.",
        icon: LayoutGrid
    },
    {
        title: "Base pour évoluer",
        desc: "Le design system est conçu pour grandir avec votre produit, du MVP à la Series A.",
        icon: TrendingUp
    }
];

export function Benefits() {
    return (
        <Section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-t border-zinc-800">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Gagne des semaines de travail dès la V1.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {benefits.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="flex flex-col items-center text-center space-y-4"
                    >
                        <div className="h-16 w-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-mint-400 mb-2 shadow-lg shadow-mint-500/5">
                            <item.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
