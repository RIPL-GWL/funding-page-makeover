import { createFileRoute, Outlet } from "@tanstack/react-router";
import { lockHiddenPage } from "@/frontend/lib/hidden-pages";
export const Route = createFileRoute("/our-team")({ beforeLoad: lockHiddenPage, component: () => <Outlet /> });
