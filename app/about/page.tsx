import { Prose } from "@/components/Prose";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article>
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">About</h1>
      <Prose>
        <p>
          Inkwell is a quiet corner of the internet for words that don&apos;t fit
          in a tweet but don&apos;t need a whitepaper either.
        </p>
        <p>
          We write about craft, attention, and building things that last.
        </p>
        <h2>What you&apos;ll find here</h2>
        <ul>
          <li>Essays on writing and the creative process</li>
          <li>Notes from building software in public</li>
          <li>Occasional book and idea reviews</li>
        </ul>
        <h2>Who writes this</h2>
        <p>
          A small team of writers who think slow web is the best web. Reach out
          via <a href="#" className="text-accent underline">email</a>.
        </p>
      </Prose>
    </article>
  );
}
