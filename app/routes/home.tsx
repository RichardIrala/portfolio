import type { Route } from "./+types/home";
import Home from "../pages/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Bienvenidos a mi portfolio" },
  ];
}

export default function Page() {
  return <Home />;
}
