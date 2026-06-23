export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 md:py-28">
      <span className="text-xs uppercase tracking-widest text-terracotta font-medium">
        About
      </span>
      <h1 className="font-display text-5xl md:text-6xl font-medium mt-3 mb-8 leading-tight">
        The story behind
        <br />
        <span className="italic">Hearth &amp; Crumb.</span>
      </h1>

      <div className="space-y-6 text-lg text-ink/75 leading-relaxed">
        <p>
          We started in 2019 in a 240-square-foot kitchen with one oven,
          one mixer, and a sourdough starter we named Otto. The plan was
          simple: bake bread the way it was meant to be baked, with flour
          ground the week before and time taken seriously.
        </p>
        <p>
          Six years later, Otto is still alive. We've grown — we have a
          storefront now, and a tiny team of people who care about the work
          as much as we do — but we still bake at night and we still don't
          cut corners.
        </p>
        <h2 className="font-display text-3xl font-medium mt-12 mb-4">
          What we believe
        </h2>
        <ul className="space-y-3 list-none pl-0">
          <li className="flex gap-3"><span className="text-terracotta">→</span> Real ingredients taste better than fake ones.</li>
          <li className="flex gap-3"><span className="text-terracotta">→</span> Slower is almost always better.</li>
          <li className="flex gap-3"><span className="text-terracotta">→</span> Know your farmer.</li>
          <li className="flex gap-3"><span className="text-terracotta">→</span> Bread is not a productivity hack.</li>
          <li className="flex gap-3"><span className="text-terracotta">→</span> A neighborhood bakery is supposed to know your name.</li>
        </ul>
        <h2 className="font-display text-3xl font-medium mt-12 mb-4">
          The team
        </h2>
        <p>
          Six of us, full-time. Mara runs the kitchen. Ben does pastry.
          Three others bake, pack, deliver, and stock the shelves. One of
          us is always at the front counter — usually the one who
          remembers your name.
        </p>
      </div>
    </article>
  );
}