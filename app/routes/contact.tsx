import type { Route } from "./+types/home";
import Contact from "../pages/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Bienvenidos a mi portfolio" },
  ];
}

export default function Page() {
  return <Contact />;
}
