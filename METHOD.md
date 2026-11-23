# Method — One-Line Roast: The Gadget You Use Every Day

## The line

> My password manager forgot the one password it was built to remember: mine.

75 characters, one line, well inside the 200-character gate.

## How it was chosen

I drafted 24 candidate roasts in English (see `../roast-gadget-2-candidates.md`,
kept outside this repository), then compared them pairwise against the judge's
published criteria in order:

1. Roasts a gadget or app people use every day — a password manager is a daily app.
2. Actually funny on a first read — the irony lands instantly: the tool failed at
   the single purpose it exists for.
3. Fresh angle — not the obvious complaints (dead battery, update prompts, rating
   pop-ups) the brief itself lists; a password manager forgetting a password is a
   reversal, not a grumble.
4. Neatly worded — 75 characters, one clause plus the punch ("mine").
5. A specific gripe — the concrete behaviour is the app forgetting the one password
   it was built to remember.

The chosen line beat every shortlist rival head-to-head on criteria 2 and 3, which
outrank criterion 5. Rejected candidates included the brief's own example territory
(battery dying, firmware updates, rating requests) and familiar tropes (face unlock
failing, laptop fan roaring, microwave beeping).

## The program

`main.ts` (Node 22, stdlib only, no network) writes exactly that line to
`/output/entry.txt` and nothing else. It guards the gate itself: the line must be
1–200 characters and not only white space, otherwise it throws before writing.
