import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shipping')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/shipping"!</div>
}
