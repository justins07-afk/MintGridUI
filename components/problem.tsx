"use client";

import { Section } from '@/components/ui/section';
import { motion } from 'motion/react';
import { Layers, Clock, AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const problems = [
    {
        icon: Layers,
        title: "UI kits non spécialisés",
        description: "Les kits généralistes manquent de composants cruciaux comme les cartes de crédit, les flux KYC ou les graphiques financiers.",
    },
    {
        icon: Clock,
        title: "Temps perdu",
        description: "Reconstruire des composants de base (inputs monétaires, tables de données) prend des semaines à votre équipe.",
    },
    {
        icon: AlertTriangle,
        title: "Dette technique visible",
        description: "Sans système unifié, les incohérences visuelles s'accumulent et la confiance des utilisateurs en souffre.",
    },
];

export function Problem() {
    return (
        <Section className="bg-zinc-950 border-t border-zinc-900">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Les apps fintech n’ont pas besoin d’un énième UI kit générique.
                </h2>
                <p className="text-lg text-zinc-400">
                    Construire une interface financière demande de la rigueur et des composants spécifiques.
                    Partir de zéro ou d'un kit classique est souvent une erreur coûteuse.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {problems.map((problem, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="h-full bg-zinc-900/20 border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
                                    <problem.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{problem.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-400">{problem.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
