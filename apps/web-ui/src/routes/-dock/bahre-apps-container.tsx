import type { PropsWithChildren } from "react";
import { cn } from "#/lib/utils";
import { useGridStyleStore } from "./grid-style.store";

export function BahreAppsContainer({ children }: PropsWithChildren) {
	const gridStyle = useGridStyleStore((s) => s.style);

	const className = cn("flex overflow-y-auto", {
		"flex-wrap gap-2 justify-between": gridStyle === "grid",
		"flex-col": gridStyle === "list",
	});

	return <div className={className}>{children}</div>;
}
