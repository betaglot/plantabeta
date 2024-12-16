# 🔷 <beta>Beta Examples</beta>

## 🔷<beta>"<via>Follow that <eko>stream</eko> up to the <eko>top corner</eko> <psike>then</psike> go left and BoustroCover </via> <psike>then</psike> <move>walk </move>back to cache"</beta>

🔻<via>"Follow": CoverHeuristic</via>

🟩<eko>"stream": Water</eko>

🔻<via>"up to the": TargetPoint</via>

🟩<eko>"top corner": PieceShape</eko>

💜<psike>"then": Event</psike>

🔻<via>"go left and BoustroCover" : ViaDirection, BoustroCover</via>

💜<psike>"then": Event</psike>

🟠<move>"walk": Walk</move>

🔻<via>"back to the cache": ViaFinishPoint</via>

## 🔷<beta>"<via>Fill</via> the <eko>wet areas</eko> with <eko>spruce</eko>, you don't need to <move>skreef</move> in the <eko>riparian areas</eko>"</beta>

🔻<via>"Fill": Cover</via>

🟩<eko>"wet areas": WetLand</eko>

💜<psike>"don't need to": NOT</psike>

🟩<eko>"spruce": Seedling</eko>

🟠<move>"skreef": SkreefMove</move>

## 🔷<beta>"Only <via>Marka</via> your <via>line in</via> and <psike>if</psike> you <via>leave</via> the <eko>trench</eko>"</beta>

🔷<beta>"Only": </beta>

🟠<move>"Marka": [MarkaMove](/encyclopedia/Move/ToolMove/MarkaMove/Overview)</move>

🔻<via>"line in": </via>

💜<psike>"if": Logic</psike>

🟩<eko>"trench": [TrenchLand](/encyclopedia/Eko/Prep/TrenchLand)</eko>

## 🔷<beta>"I've been <via>backfilling</via> this <eko>piece</eko>"</beta>

🔻<via>"backfilling": BackCover</via>

🟩<eko>"piece": Piece</eko>

## 🔷<beta>"<psike>When</psike> we <via>get to</via> that <eko>boulder</eko> we'll <via>turn back</via>"</beta>

💜<psike>"When": Event</psike>

🔷<beta>"we": TeamBeta</beta>

🔻<via>"get to": ViaPoint</via>

🟩<eko>"boulder": Rock</eko>

🔻<via>"turn back": TurnAroundCurve</via>

## 🔷<beta><move>Step</move>.<via>Over</via>(<eko>Log</eko>)</beta>

is not a move, it is Beta since it is composed of 3 modules:

🟠<move>Step()</move>

🔻<via>Over()</via>

🟩<eko>Log</eko>

## 🔷<beta>"<via>Close</via> a <eko>piece</eko>"</beta>

🔻<via>Close()</via>

🟩<eko>Piece</eko>

## 🔷<beta>"<via>Close</via> a <eko>Hole</eko>"</beta>

🔻<via>Close()</via>

🟩<eko>Hole</eko>

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

## 🟩<eko>Piece</eko>.<via>Cover(Boustro)</via>

## 🔷<beta>"<move>Bag up heavy</move> to <via>backfill</via> this <eko>long piece</eko></beta>

🟠<move>BagSize</move>

🔻<via>BackCover</via>

🟩<eko>Long Piece</eko>

## 🔷<beta>"<via>Line in through the</via> <eko>narrow channel </eko><psike>then</psike> <via>go left through</via> <eko>another channel</eko> <via>to </via>a <eko>rectangle of PerfectTrenches</eko>"</beta>

1. 🔻<via>LineIn()</via>
2. 🟩<eko>Channel</eko>
3. 💜<psike>then</psike>
4. 🔻<via>Go(Left)</via>

## 🔷<beta>Get to the back of the piece then start backfilling</beta>

-

<h2>PageTags</h2>

- "Beta.BetaExamples"
- "Beta.BetaExamples.BetaQuote"
- "Beta.BetaVideo"

:::
