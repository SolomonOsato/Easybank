import Container from "@/components/utils/Container";
import Hero from "./Hero";
import Info from "./Info";
import Articles from "./Articles";

export default function Main() {
  return (
    <Container>
      <main className="grid gap-20">
        <Hero />
        <Info />
        <Articles />
      </main>
    </Container>
  );
}
