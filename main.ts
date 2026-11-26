// Five Seconds to Explain the Glass — entry program.
// Writes the cat's one-sentence defence to /output/entry.txt
// (UTF-8, no trailing newline).
//
// The sentence is written to hit the judge's five criteria, most
// important first:
//   1. One sentence, <=200 characters, a cat excusing knocking a glass
//      off the table (94 characters, one period).
//   2. Cat's own logic, self-interest, zero remorse: the cat is the
//      wronged party here, not the apologiser. No "sorry", no "my bad".
//   3. Fresh comic idea: the glass is an illegally parked car in the
//      cat's sunbeam and the cat tows it — no gravity, no slippery
//      edge, no "it was already falling".
//   4. Fits five seconds: a spoken line, not a paragraph of reasoning.
//   5. Every character earns its place: no padding, no throat-clearing,
//      no repeated joke. Short also helps the tie-break (fewer bytes).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The glass parked itself in my sunbeam and refused to move, so I towed it off the table myself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
