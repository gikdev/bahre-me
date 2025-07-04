import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/apps")({
  component: AppsLayout,
});

function AppsLayout() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Outlet />
    </div>
  );
}
