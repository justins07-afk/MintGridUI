import * as React from 'react';

export function MintGridLogo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            {/* Grid representation */}
            <rect x="3" y="3" width="7" height="7" rx="1" className="text-mint-500" fill="currentColor" stroke="none" />
            <rect x="14" y="3" width="7" height="7" rx="1" className="opacity-50" />
            <rect x="14" y="14" width="7" height="7" rx="1" className="opacity-50" />
            <rect x="3" y="14" width="7" height="7" rx="1" className="text-mint-500" fill="currentColor" stroke="none" opacity="0.5" />

            {/* Subtle connection lines or abstract */}
        </svg>
    );
}
