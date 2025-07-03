import { Grip } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "#/components/ui/popover";
import { TextLarge } from "#/components/ui/typography";
import { AppBtn } from "./app-btn";
import { bahreApps } from "./bahre-apps";
import { BahreAppsContainer } from "./bahre-apps-container";
import { GridStyleToggle } from "./grid-style-toggle";

export function Dock() {
	return (
		<div className="p-2 gap-2 flex border w-96 mx-auto rounded-md justify-between mb-2 bg-card text-card-foreground ">
			<Popover>
				<PopoverTrigger>
					<Button size="icon" className="size-12" title="Open app grid">
						<Grip className="size-8" />
					</Button>
				</PopoverTrigger>

				<PopoverContent className="flex flex-col gap-2 p-2 m-2 h-96 w-74">
					<div className="border-b pb-2 flex items-center">
						<TextLarge>Apps</TextLarge>

						<GridStyleToggle className="ms-auto" />
					</div>

					<BahreAppsContainer>
						{bahreApps.map((app) => (
							<AppBtn key={app.id} app={app} />
						))}
					</BahreAppsContainer>
				</PopoverContent>
			</Popover>
		</div>
	);
}
