import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

// Simplified Button since we didn't install cva yet, using plain Maps or string logic
// Actually, standard cva is great but I'll write clean custom logic to stick to requests or minimal deps.
// I didn't install cva. I'll use simple conditional classes.

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'default' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        // motion.button if we want animation, but Slot makes it tricky.
        // Let's stick to standard button for now or wrap with motion if needed.
        // Wait, prompt asked for hover animations. I can add standard css transition or framer motion.
        // Let's use CSS transitions for base button, easier to compose.

        // Base styles
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95";

        // Variants
        const variants = {
            primary: "bg-mint-500 text-zinc-950 hover:bg-mint-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
            secondary: "bg-zinc-800 text-zinc-50 hover:bg-zinc-700 hover:text-white",
            outline: "border border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white",
            ghost: "hover:bg-zinc-800 hover:text-zinc-50 text-zinc-400",
        };

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-lg px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button };
