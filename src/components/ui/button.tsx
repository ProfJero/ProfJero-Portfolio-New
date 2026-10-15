import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 disabled:pointer-events-none disabled:opacity-50 min-h-11 px-5 text-sm",
  {
    variants: {
      variant: {
        primary: "bg-brand text-on-brand hover:opacity-90",
        line: "border border-line bg-card text-ink hover:border-brand",
        ghost: "bg-transparent text-ink hover:bg-line",
        onhero: "bg-on-hero text-ink hover:opacity-90",
        quiet: "bg-transparent text-on-hero border border-white/30 hover:bg-white/10",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, asChild, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}
