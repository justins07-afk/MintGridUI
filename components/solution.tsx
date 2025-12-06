"use client";

import { Section } from '@/components/ui/section';
import { motion } from 'motion/react';
import { Wallet, Moon, Users } from 'lucide-react';

const solutions = [
    {
        icon: Wallet,
        title: "Composants fintech-ready",
        description: "Wallets, transactions, KYC, dashboards, tables, filters... Tout est là pour assembler votre produit en un temps record."
    },
    {
        icon: Moon,
        title: "Dark mode inclus",
        description: "Le mode sombre n'est pas une option en fintech. MintGrid UI inclut des palettes optimisées pour le confort visuel pro."
    },
    {
        icon: Users,
        title: "Pensé pour l'équipe",
        description: "Une structure claire pour les designers, un code propre pour les développeurs. Le pont parfait entre Figma et React."
    }
];

export function Solution() {
    return (
        <Section className="bg-zinc-900 border-t border-zinc-800">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Un design system prêt pour les produits financiers.</h2>
                    <p className="text-lg text-zinc-400">
                        Conçu spécifiquement pour les néobanques, wallets crypto, plateformes d'investissement et saas B2B.
                        Ne perdez plus de temps à adapter des composants e-commerce.
                    </p>
                </div>
                {/* Decorative abstract visual or just usage of space */}
                <div className="hidden lg:block h-px bg-gradient-to-r from-zinc-800 via-mint-500/50 to-zinc-800" />
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {solutions.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="space-y-4"
                    >
                        <div className="h-14 w-14 rounded-full bg-mint-500/10 flex items-center justify-center text-mint-500 border border-mint-500/20">
                            <item.icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
