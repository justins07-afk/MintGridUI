"use client";

import { Section } from '@/components/ui/section';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';

const fallbackFaqs = [
    {
        question: "C'est quoi exactement MintGrid UI ?",
        answer: "C'est un design system complet pour Figma et React, spécialisé pour les produits fintech. Il inclut une librairie de composants UI, des modèles de pages et des guidelines graphiques pensés pour la finance (dashboard, crypto, banking)."
    },
    {
        question: "Est-ce que c'est seulement pour Figma ?",
        answer: "Non ! MintGrid UI est livré avec une implémentation React (prochainement Vue/Svelte) qui correspond pixel-perfect aux composants Figma. Vous gagnez du temps sur le design ET le développement."
    },
    {
        question: "Pour quels types de produits fintech ?",
        answer: "Idéal pour les néobanques, wallets Web3, plateformes SaaS B2B, tableaux de bord de trading et applications de gestion de patrimoine."
    },
    {
        question: "Puis-je l'utiliser sur plusieurs projets ?",
        answer: "Oui, la licence Standard vous permet de l'utiliser sur un nombre illimité de projets personnels et commerciaux."
    }
];

export function FAQ() {
    const [faqs, setFaqs] = useState(fallbackFaqs);

    useEffect(() => {
        const query = `*[_type == "faq"] | order(order asc)`;
        client.fetch(query).then((result: any[]) => {
            if (result && result.length > 0) setFaqs(result);
        }).catch((err: unknown) => {
            console.log("Sanity fetch error (likely no project ID yet):", err);
            // Keep fallback
        });
    }, []);

    return (
        <Section className="bg-zinc-950 py-24">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Questions fréquentes.</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Section>
    );
}
