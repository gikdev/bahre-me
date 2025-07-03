import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Grid, LayoutGrid, List, Settings } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/components/ui/popover";
import { Text, TextLarge } from "#/components/ui/typography";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex flex-col h-dvh overflow-hidden fixed inset-0">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* <TanStackRouterDevtools /> */}

      <div className="p-2 gap-2 flex border-t rounded-md justify-between">
        <Popover>
          <PopoverTrigger>
            <Button size="icon" variant="primary">
              <LayoutGrid />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="flex flex-col gap-2 p-2 m-2 h-96">
            <div className="border-b border-input pb-2 flex items-center">
              <TextLarge>Apps</TextLarge>

              <div className="ms-auto">
                <Button size="iconSm" variant="outline" className="rounded-e-none" disabled>
                  <Grid />
                </Button>
                <Button size="iconSm" variant="outline" className="rounded-s-none" disabled>
                  <List />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-between items-center overflow-y-auto">
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
              <Button size="icon" variant="outline">
                <Settings />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
