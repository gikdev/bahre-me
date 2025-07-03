import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Dock } from "./-dock";

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<div className="flex flex-col h-dvh overflow-hidden fixed inset-0">
			<div className="flex-1 overflow-y-auto">
				<Outlet />
			</div>

			<TanStackRouterDevtools />

			<Dock />
		</div>
	);
}
