import type { Route } from "./+types/home";
import AboutMe from "../pages/AboutMe/AboutMe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Bienvenidos a mi portfolio" },
  ];
}

export default function Page() {
  return <AboutMe />;
}
