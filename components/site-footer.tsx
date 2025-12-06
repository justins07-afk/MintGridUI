import { MintGridLogo } from '@/components/icons/mintgrid-logo';
import Link from 'next/link';

export function SiteFooter() {
    return (
        <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-6">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                        <MintGridLogo className="h-5 w-5 text-mint-500" />
                    </div>
                    <div>
                        <span className="text-sm font-bold text-white block">MintGrid UI</span>
                        <span className="text-xs text-zinc-500">Fintech-focused design system.</span>
                    </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-zinc-500">
                    <Link href="#" className="hover:text-white transition-colors">Contact</Link>
                    <Link href="#" className="hover:text-white transition-colors">Blog</Link>
                    <Link href="#" className="hover:text-white transition-colors">Legal</Link>
                </div>
            </div>
            <div className="mx-auto max-w-7xl mt-8 text-center md:text-left text-xs text-zinc-600">
                © {new Date().getFullYear()} MintGrid UI. All rights reserved.
            </div>
        </footer>
    );
}
