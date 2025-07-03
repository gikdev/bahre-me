import { TextMuted } from "#/components/ui/typography";
import { cn } from "#/lib/utils";
import type { BahreApp } from "./bahre-apps";
import { useGridStyleStore } from "./grid-style.store";

interface AppBtnProps {
	app: BahreApp;
	onClick?: () => void;
}

export function AppBtn({ app, onClick }: AppBtnProps) {
	const gridStyle = useGridStyleStore((s) => s.style);
	const iconOnlyMode = gridStyle === "grid";

	const appBtnStyles = cn(
		`
      cursor-pointer flex items-center justify-start
      whitespace-nowrap rounded-md text-sm font-medium transition-all
      disabled:pointer-events-none disabled:opacity-50 gap-2
      [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4
      shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring
      focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20
      dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
      hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50
      has-[>svg]:px-3 p-2
    `,
		{ "size-12": iconOnlyMode },
	);

	return (
		<button
			data-slot="button"
			onClick={onClick}
			className={appBtnStyles}
			type="button"
			title={app.name}
		>
			<img className="size-8" src={app.iconsPaths.png} alt={app.name} />
			{!iconOnlyMode && <TextMuted>{app.name}</TextMuted>}
		</button>
	);
}
