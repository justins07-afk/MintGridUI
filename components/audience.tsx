"use client";

import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'motion/react';
import { Rocket, PenTool, Code2 } from 'lucide-react';

const audiences = [
    {
        role: "Founders & PMs",
        icon: Rocket,
        desc: "Lancez une V1 convaincante sans attendre d'avoir une équipe design complète. Validez votre marché plus vite."
    },
    {
        role: "Product Designers",
        icon: PenTool,
        desc: "Ne partez pas d'un fichier vide. Concentrez-vous sur l'UX et les features uniques, pas sur la création de boutons."
    },
    {
        role: "Développeurs",
        icon: Code2,
        desc: "Des composants logiques, typés et faciles à étendre. Copiez-collez le code et avancez sur la logique métier."
    }
];

export function Audience() {
    return (
        <Section className="bg-zinc-950 relative overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-zinc-900 to-transparent opacity-50 pointer-events-none" />

            <div className="relative z-10 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Conçu pour les équipes qui construisent vite.</h2>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Quelle que soit votre rôle, MintGrid UI élimine les frictions entre le design et le code.
                </p>
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-6">
                {audiences.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="h-full border-zinc-800 bg-zinc-900/80 hover:border-mint-500/30">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-zinc-200">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{item.role}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-400">
                                    {item.desc}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
