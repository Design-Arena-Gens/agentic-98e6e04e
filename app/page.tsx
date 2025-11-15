import Link from "next/link";
import { sections } from "../lib/sections";

export default function HomePage() {
  return (
    <article>
      <section>
        <h2>What this is</h2>
        <p>
          A quiet set of field notes on <em>Goodnight Punpun</em>. Deadpan on purpose. 
          Black and white because color would be a lie. Short lines until they have to be long.
        </p>
        <p>
          Read in order if you like paths. Skip around if you prefer weather.
          Either way, you?ll end up in the same place: somewhere honest and a little unkind.
        </p>
      </section>

      <hr />

      <section>
        <h2>Table of contents</h2>
        <ul className="toc">
          {sections.map((s, idx) => (
            <li key={s.slug}>
              <div>
                <Link href={`/punpun/${s.slug}`}>{String(idx + 1).padStart(2, "0")} ? {s.title}</Link>
              </div>
              <div className="kicker">{s.blurb}</div>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      <section>
        <h2>How to use this</h2>
        <p>
          Read slowly. Breathe on purpose. When it feels like too much, it?s working. Close the tab.
          Come back later. The book will wait. It always does.
        </p>
      </section>
    </article>
  );
}
