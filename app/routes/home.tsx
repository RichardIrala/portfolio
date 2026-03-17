import type { Route } from "./+types/home";
import { default as Homepage } from "../pages/Home/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Bienvenidos a mi portfolio" },
  ];
}

export default function Home() {
  return <Homepage />;
}
