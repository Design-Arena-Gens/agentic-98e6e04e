import { sections, getPrevNext } from "../../../lib/sections";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const found = sections.find((s) => s.slug === params.slug);
  const title = found ? `${found.title} ? Goodnight Punpun` : "Goodnight Punpun";
  return { title };
}

const Content: Record<string, JSX.Element> = {
  prologue: (
    <section>
      <h2>Prologue ? A Small, Bad Star</h2>
      <p>
        The book isn?t friendly. It smiles anyway. That?s the first trick. The second is slower:
        nothing happens, for a long time, and then you realize everything already did.
      </p>
      <p>
        It?s a love story, if you define love as gravity with manners. Children say prayers like
        adults write emails: transactional, a little embarrassed, hopeful in spite of themselves.
      </p>
      <p>
        The bird-shape isn?t cute. It?s a mask with good handwriting. The round eyes keep you from
        looking away. The rest of the page handles the screaming.
      </p>
    </section>
  ),
  overview: (
    <section>
      <h2>Overview ? The Shape of the Fall</h2>
      <p>
        A childhood opens. It refuses to stay small. The camera sits back, patient, almost bored,
        until boredom turns into weather. Houses are cramped. Hallways are long. The sky is a lid.
      </p>
      <p>
        The plot is technically linear. Practically, it?s a spiral. Each loop pretends to be new,
        but the radius barely changes. You call that growth, because it?s easier than calling it drift.
      </p>
      <p>
        No one wakes up evil. They wake up tired, then make bad choices on sale. This is a book about
        the logistics of damage. How it ships itself. How it arrives early.
      </p>
    </section>
  ),
  "plot-arc-map": (
    <section>
      <h2>Plot Arc Map ? From Childish Prayers to Adult Silence</h2>
      <ol>
        <li>
          Childhood: small promises said loudly. The god is a joke that answers like a debt collector.
        </li>
        <li>
          Adolescence: friendships turn into experiments. Hope learns to counterfeit itself.
        </li>
        <li>
          Early adulthood: the mask doesn?t come off; it just fits better. Workdays. Detours.
        </li>
        <li>
          Collapse: running is just walking with louder footsteps. Love as a closed room with a window drawn on.
        </li>
        <li>
          Aftermath: dust, then inventory. The miracle is that anything remains countable.
        </li>
      </ol>
      <p>
        If you need a compass, use hunger. If you need a map, use regret. They both point north.
      </p>
    </section>
  ),
  characters: (
    <section>
      <h2>Characters ? People, Or Something Like It</h2>
      <p>
        Punpun is less a boy than a measurement. He records pressure. He records heat. He fails to
        record himself. The outline is accurate. The interior is an IOU.
      </p>
      <p>
        Aiko is weather that remembers your name. She speaks in terms and conditions. You check the
        box anyway. The price is printed on the last page.
      </p>
      <p>
        The adults are parade floats of coping strategies. Some are funny. Most leak. Nobody is a monster
        on purpose. That rarely helps.
      </p>
    </section>
  ),
  "family-systems": (
    <section>
      <h2>Family Systems ? Homes on Fire</h2>
      <p>
        Violence doesn?t always shout. Sometimes it labels the shelves and makes dinner. The panels do
        not exaggerate. That?s why they hurt.
      </p>
      <p>
        The inheritance is not money, it?s momentum. A way of answering questions with smaller questions.
        You try to stop it like you try to stop rain: bravely, and in private.
      </p>
    </section>
  ),
  themes: (
    <section>
      <h2>Themes ? Faith, Nihilism, And the Joke of Meaning</h2>
      <p>
        Faith appears first as a customer support line for the lonely. Later, it becomes a mirror
        that charges admission. Meaning is negotiated, then rented, then forfeited.
      </p>
      <p>
        The book respects sincerity and distrusts certainty. When someone claims to know, the panel
        tightens. When someone asks, the horizon shows up again, like a refund.
      </p>
    </section>
  ),
  symbolism: (
    <section>
      <h2>Symbolism ? Birds, Constellations, Garbage Gods</h2>
      <p>
        The bird is an alibi: an anti-face for a person who can?t afford one. Constellations appear when
        characters need directions they won?t follow. The god is worse: a punchline that keeps landing.
      </p>
      <p>
        Objects keep secrets better than people do. Pay attention to walls, lamps, signage. They testify
        without perjuring themselves.
      </p>
    </section>
  ),
  "visual-language": (
    <section>
      <h2>Visual Language ? Negative Space That Screams</h2>
      <p>
        Photographic backdrops, toon figures. A cheap trick that isn?t cheap at all. It creates moral
        parallax: the world has detail, the people have excuses.
      </p>
      <p>
        Page-turns are percussion. Double-spreads are verdicts. When the gutters widen, the silence is doing
        the talking. You hear it anyway.
      </p>
    </section>
  ),
  "hidden-details": (
    <section>
      <h2>Hidden Details ? The Stuff You Only Notice Later</h2>
      <ul>
        <li>Background signage repeats like a nervous tick. It?s not random. It?s a diagnosis.</li>
        <li>Room layouts change subtly across years. Memory edits the floor plan first.</li>
        <li>Objects migrate panels before they matter. The book foreshadows by moving furniture.</li>
        <li>Jokes arrive at impact scenes. Humor is the pressure valve. Also the blade.</li>
      </ul>
      <p>
        None of this is trivia. It?s scaffolding. The plot stands on it and pretends not to notice.
      </p>
    </section>
  ),
  "reading-guide": (
    <section>
      <h2>Reading Guide ? How Not To Flinch</h2>
      <p>
        One volume at a time. Water nearby. No binge heroics. Let the bad air out between sessions.
      </p>
      <p>
        When you feel judged by the page, check your posture. When you feel seen, check the lock on the door.
        You?re fine. Probably.
      </p>
    </section>
  ),
  "further-reading": (
    <section>
      <h2>Further Reading ? Aftercare</h2>
      <p>
        If you want neighbors: <em>Oyasumi Punpun</em> sits near books about lonely cities, unreliable gods,
        and children who grew up like bad rumors. Look for creators who like silence more than speeches.
      </p>
      <p>
        Then take a week off. Touch grass. Or at least the light switch.
      </p>
    </section>
  ),
};

export default function SectionPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const found = sections.find((s) => s.slug === slug);
  if (!found) {
    return (
      <article>
        <h2>Missing</h2>
        <p>That page isn?t here. Neither are most of us.</p>
        <p>
          <Link href="/">Back home</Link>
        </p>
      </article>
    );
  }

  const { prev, next, currentIndex } = getPrevNext(slug);
  const content = Content[slug];

  return (
    <article>
      <div className="meta">{String(currentIndex + 1).padStart(2, "0")} of {sections.length}</div>
      {content}
      <hr />
      <nav className="nav" aria-label="Pagination">
        {prev ? (
          <Link href={`/punpun/${prev.slug}`}>? {prev.title}</Link>
        ) : (
          <span />
        )}
        <Link href="/">Table of contents</Link>
        {next ? (
          <Link href={`/punpun/${next.slug}`}>{next.title} ?</Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
