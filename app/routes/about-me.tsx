import AboutMe from "../pages/AboutMe";

export function meta() {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Bienvenidos a mi portfolio" },
  ];
}

export default function Page() {
  return <AboutMe />;
}
