import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/track-order')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/track-order"!</div>
}
