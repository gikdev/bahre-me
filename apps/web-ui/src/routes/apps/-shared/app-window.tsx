import { useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";
import type { BahreApp } from "#/routes/-dock/bahre-apps";

interface AppWindowProps {
	app: BahreApp;
	children: ReactNode;
	containerClassName?: string;
}

export function AppWindow({
	app,
	children,
	containerClassName,
}: AppWindowProps) {
	const navigate = useNavigate();

	const handleClose = () => {
		navigate({ to: "/" });
	};

	const containerClasses = cn(
		"bg-card text-card-foreground flex",
		"flex-col rounded-md border shadow-sm mx-2",
		containerClassName,
	);

	return (
		<div className={containerClasses}>
			<div className="flex items-center gap-2 justify-between border-b px-2 py-1">
				<div className="flex items-center gap-1">
					<img className="size-6" alt="" src={app.iconsPaths.png} />
					<p className="">{app.name}</p>
				</div>

				<div className="">
					<Button size="iconSm" onClick={handleClose}>
						<X />
					</Button>
				</div>
			</div>

			{children}
		</div>
	);
}
