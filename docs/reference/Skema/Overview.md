# 🕸 Skema_Core.JSON

## Purpose

### SingleSource of Truth

- To make PlantaBeta portable to Vue, Python, D3, SQLite, Poster, PopUp, Betomiks
- It's easier to manipulate data within a Json than within tons of directories of Markdown
- To ensure that if one element relates to another, then they both have the relationship
    - If 🟠BrazoOnda has the SuperMoove 🟠Amble, then 🟠Amble must have the SubMoove 🟠BrazoOnda

### To describe all the Elements which influence the InstanceAttributes of each Element

Unlike other BetaSports, Plantors always choose the easiest Beta, so there's no point in creating a CodeOfPoints.

- How to maximize the Ease of every Element

- In a given situation, which combination of Elements is produce the greatest Ease

### To discover NeoBetaElements (Everything is Connected)

Combine all **Definitions** of BetaTipos to create new propositions. Why? To make as many connections as possible between elements, so when you understand an element you also have some understanding of other elements which share element parents. To gain a deeper understanding of the definitions.

🟩 Flora + 🔻 Density = 🟩 FloraDensity
🟩 Prep + 🔻 Density = 🟩 PrepDensity
🟠 Moove + 🔻 Density = 🟠 MooveDensity

🟩 Flora + 🔻 Line = 🟩 FloraLine (like between Trenches)
🟩 Prep + 🔻 Line = 🟩 PrepLine (Trench or Line of Mounds)
🟠 Moove + 🔻 Line = 🟠 MooveLine (line of best fit)

Some scopes don't make sense.

#### 🛠<dev>Analysis Paralysis</dev>

Nobody gives a shit about the classification of PlantorExperience, they only care about the practical use.

Analysis paralysis, also known as decision paralysis or choice paralysis, is when someone overthinks a problem to the point of being unable to make a decision. It can happen when someone is faced with too many choices, too much information, or is anxious about making a mistake.
Causes

- Anxiety: Psychologists say that anxiety is the root cause of analysis paralysis.
- Too many options: The more options someone has, the harder it can be to choose one.
- Perfectionism: Someone may want a perfect solution but fear making a mistake.

### EkologikalLearning

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
- If "🟠Amble" is searched, then results its SubMoove 🟠BrazoOnda

### BetaVideoTagging

#### Suggestions.LevelOfDetail

> Being able to choose the LevelOfDetail is the key to tagging collaboration

Choose the LevelOfDetail

- If Klose is written, then all of the types of Klose are displayed and one must be selected to go to the next BetaMoment

#### TagRounds

- BatchProcessing
    - A delegate could do the first round, and I do the later rounds at a greater LevelOfDetail
    - Allows you to reduce task switching (RepetitionEase) by Batching all 🟠SiteMooves at once, then all the 🟩Eko moves, etc...

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
        "RelatedMoove": [],
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
