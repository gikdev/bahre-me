import { createFileRoute } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex flex-wrap gap-2 p-2">
      <Button variant="default">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="secondary">Button</Button>
    </div>
  );
}
