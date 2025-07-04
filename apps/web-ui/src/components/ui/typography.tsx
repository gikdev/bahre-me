import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "#/lib/utils";

const headingVariants = cva("scroll-m-20 tracking-tight", {
	variants: {
		size: {
			h1: "text-center text-4xl font-extrabold text-balance",
			h2: "border-b pb-2 text-3xl font-semibold first:mt-0",
			h3: "text-2xl font-semibold",
			h4: "text-xl font-semibold",
		},
	},
	defaultVariants: {
		size: "h2",
	},
});

interface HeadingProps
	extends ComponentProps<"h1">,
		VariantProps<typeof headingVariants> {
	level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function Heading({
	className,
	size,
	level: Tag = "h2",
	...props
}: HeadingProps) {
	return (
		<Tag className={cn(headingVariants({ size, className }))} {...props} />
	);
}

function Text({ className, ...props }: ComponentProps<"p">) {
	return (
		<p
			className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
			{...props}
		/>
	);
}

function Blockquote({ className, ...props }: ComponentProps<"blockquote">) {
	return (
		<blockquote
			className={cn("mt-6 border-l-2 pl-6 italic", className)}
			{...props}
		/>
	);
}

function TextList({ className, ...props }: ComponentProps<"ul">) {
	return (
		<ul
			className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
			{...props}
		/>
	);
}

function InlineCode({ className, ...props }: ComponentProps<"code">) {
	return (
		<code
			className={cn(
				"bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-xs",
				className,
			)}
			{...props}
		/>
	);
}

function TextLead({ className, ...props }: ComponentProps<"p">) {
	return (
		<p className={cn("text-muted-foreground text-xl", className)} {...props} />
	);
}

function TextLarge({ className, ...props }: ComponentProps<"p">) {
	return <p className={cn("text-lg font-semibold", className)} {...props} />;
}

function TextSmall({ className, ...props }: ComponentProps<"small">) {
	return (
		<small
			className={cn("text-sm leading-none font-medium", className)}
			{...props}
		/>
	);
}

function TextMuted({ className, ...props }: ComponentProps<"p">) {
	return (
		<p className={cn("text-muted-foreground text-sm", className)} {...props} />
	);
}

export {
	Heading,
	Text,
	Blockquote,
	TextList,
	InlineCode,
	TextLead,
	TextLarge,
	TextSmall,
	TextMuted,
};
