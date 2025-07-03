import { Grid, List } from "lucide-react";
import { Button } from "#/components/ui/button";
import { useGridStyleStore } from "./grid-style.store";

interface GridStyleToggleProps {
	className?: string;
}

export function GridStyleToggle({ className }: GridStyleToggleProps) {
	const { style: gridStyle, changeTo } = useGridStyleStore();

	return (
		<div className={className}>
			<Button
				size="iconSm"
				variant={gridStyle === "grid" ? "secondary" : "outline"}
				className="rounded-e-none"
				onClick={() => changeTo("grid")}
			>
				<Grid />
			</Button>

			<Button
				size="iconSm"
				variant={gridStyle === "list" ? "secondary" : "outline"}
				className="rounded-s-none"
				onClick={() => changeTo("list")}
			>
				<List />
			</Button>
		</div>
	);
}
