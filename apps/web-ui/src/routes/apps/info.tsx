import { createFileRoute } from "@tanstack/react-router";
import { InlineCode } from "#/components/ui/typography";
import { assert } from "#/lib/utils";
import { bahreApps } from "#/routes/-dock/bahre-apps";
import { AppWindow } from "./-shared/app-window";

export const Route = createFileRoute("/apps/info")({
  component: AppInfo,
});

function AppInfo() {
  const infoApp = bahreApps.find((a) => a.id === "info");
  assert(infoApp !== undefined, "`infoApp` should not be undefined!");

  const linkToMe = (
    <a
      className="text-primary font-mono border-b border-transparent hover:border-primary"
      href="https://bahrami85.ir/"
    >
      @gikdev
    </a>
  );

  return (
    <AppWindow app={infoApp}>
      <div className="p-2 max-w-96">
        <p>
          This is app made for {linkToMe} by {linkToMe}
        </p>

        <p className="">
          <span className="text-muted-foreground">Version: </span>
          <InlineCode>v1</InlineCode>
        </p>
      </div>
    </AppWindow>
  );
}
