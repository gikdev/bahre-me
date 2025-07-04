import { createFileRoute } from "@tanstack/react-router";
import { InlineCode } from "#/components/ui/typography";
import { assert } from "#/lib/utils";
import { bahreApps } from "#/routes/-dock/bahre-apps";
import { AppWindow } from "./-shared/app-window";

export const Route = createFileRoute("/apps/countey")({
  component: AppCountey,
});

function AppCountey() {
  const counteyApp = bahreApps.find((a) => a.id === "countey");
  assert(counteyApp !== undefined, "`counteyApp` is & shouldn't be undefined!");
  
  return (
    <AppWindow app={counteyApp}>
      <div className="p-2 w-full max-w-120">
        <p className="">
          <span className="text-muted-foreground">Version: </span>
          <InlineCode>v1</InlineCode>
        </p>
      </div>
    </AppWindow>
  );
}
