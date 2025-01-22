# 🕸 Skema_Core.JSON

## Purpose

### SingleSource of Truth

- To make PlantaBeta portable to Vue, Python, D3, SQLite, Poster, PopUp, Betomiks
- It's easier to manipulate data within a Json than within tons of directories of Markdown
- To ensure that if one element relates to another, then they both have the relationship
    - If 🟠BrazoOnda has the SuperMove 🟠Amble, then 🟠Amble must have the SubMove 🟠BrazoOnda

### EkologicalLearning

- Wander through PlantaBeta by using the SkemaMarkdown
- Identical to the Wikipedia "See Also" section near the bottom of the wiki page

### SkemaPoster

### SkemaPopUp

### SkemaVue

- To dynamically use a VueComponent (SkemaVue) to display an Element's Skema in multiple different Views
    - D3
            - HierarchyTree
        - NetworkChart
        - Sunburst
    - List
    - Grid
    - BetaGlyphs

#### D3

- To Chart the relationships between Elements
- Use Python to programatically convert the Skema into multiple different visualization types
    - HierarchyTree
    - NetworkChart
    - Sunburst

### SkemaMarkdown

- To

### Search

- Searching for Parents, results in the Parents and their Children
- If "🟠Amble" is searched, then results its SubMove 🟠BrazoOnda

### BetaVideoTagging

#### Suggestions.LevelOfDetail

> Being able to choose the LevelOfDetail is the key to tagging collaboration

Choose the LevelOfDetail

- If Klose is written, then all of the types of Klose are displayed and one must be selected to go to the next BetaMoment

#### TagRounds

- BatchProcessing
    - A delegate could do the first round, and I do the later rounds at a greater LevelOfDetail
    - Allows you to reduce task switching (RepetitionEase) by Batching all 🟠SiteMoves at once, then all the 🟩Eko moves, etc...

- FirstRound is LowDetail
- Next round increases the Validation.LevelOfDetail

- Example
    - Tagging all the 🟠SiteKlose within a video, then go back to tag the specific 🟠SiteKlose move (🟠HammerKlose)

#### Autocomplete

- If "Bra" is written, then all Elements which start with "Bra" AND haven't been Scribed yet

#### Validation

- A 🟠SiteOpen must be followed by a 🟠SiteKlose

##### Validation.LevelOfDetail

- LevelOfDetail(3)
    - "Klose" isn't valid, but "ManoKlose" is valid

```vtt
4
00:00:41.659 --> 00:01:08.000 align:left position:0% size:50%
<b>Tree_4</b>
🔷:
🟩:
🟠:SpadeScreef, HandClose
🔻:ObstacleSite, NeoSite(RedRot)
💜:
🛠:
```

## Syntax

```json

    {
        "ElementName": "SiteTriangle",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectNeosite/NeoSitePolygon/SiteTriangle",
        "SuperDirectory": "NeoSitePolygon",
        "SuperElementName": [],
        "SubElementName": [],
        "ConcurrentElementName": [],
        "RelatedEkon": [],
        "RelatedVium": [],
        "RelatedMove": [],
        "RelatedPsike": [],
        "Description": "",
        "Alias": [],
        "Dev": [],
        "ElementType": ""
    },

```

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

- Program routes through the Skema like a PuzzleSphere
- Skema PopUp book

:::
