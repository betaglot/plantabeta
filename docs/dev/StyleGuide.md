
# 🛠 Style Guide

<https://developers.google.com/style>

<via>

## Be Canadian, eh!

It doesn't matter if it's always totally true, the canadian stereotype is believed, not proven.

### Mindset

- Openness
    - Open Source
    - Anyone can be a plantor
- Kindness
    - "the quality of being generous, helpful, and caring about other people"
    - No crusty vet
    - All on the same team

### Canadian Activities

- Paddling
    - Canoe
    - Kayak
- Hockey
- Lacrosse
- Skiing
    - Freestyle Skiing
- Alpinism

### Canadian Land

- Massive Wilderness
    - EcoHome Hero Image
- Cold, Winter

</via>

## Classic Style

> The writer can see something that the reader has not yet noticed, and he orients the reader's gaze so that she can see it for herself.

You're already performing beta elements, you've just never labelled them before.

Beta is a description

They are currently capable of performing all beta, there are no prerequisites to performing beta. Know how beta works requires knowledge of many fields of science: geology, kinesiology, biology, psychology, physics, meteorology...

Steven Pinker [The Sense of Style: A Thinking Person's Guide to Writing in the 21st Century](https://stevenpinker.com/publications/sense-style-thinking-persons-guide-writing-21st-century)

Cambridge grammar 2002 Huddleston

Show don't tell

Reader and writer are intellectual equals

## <dev>Semantics</dev>

::: warning

It's easy to get stuck on the linguistics and naming. You can think about it for hours while in the land. While sitting in front of a computer your time is better spent typing, not thinking about increasing the clarity. Just get it out, then you can edit.

:::

### (Woods)InteadOf([Forest, Plantation])

- Bushes are wood
- Flowers are not wood

### "Planting"

Planting= Planting Industry
Planting= Putting a Tree in the Ground

### "Plant"

Try to avoid PlantPlant plant a plant in the ground. InsertPlant

InsertPod

Plant= Put a Tree in the Ground

- Put

Plant= Organism from Plantae

### Keep it G

Euphemisms undermine PlantaBeta and open it up to unnecessary criticism

- CreamyLand
- "Cream out"
- "Slut in"
-

## <dev>LevelOfDetail</dev>

No Acronyms

Write complete sentences.

Point form is lazy. Think about all the coding documentation which is not easy to read. Too formal, too concise, humans don't process language like computers, point of view matters.

## <dev>ElementName</dev>

- PascaleCase

## <dev>Bilingual</dev>

 French,  English

## <dev>Grammar</dev>

### You, not them

Second person instead of 3rd person

### Article

#### "a" not "the"

> The definite article "the" is used before a noun to indicate that the identity of the noun is known to the reader. The indefinite article "a, an" is used before a noun that is general or when its identity is not known.

Good
> Obstacle within a Hole

Bad
> Obstacle within the Hole

### Tense

### Remember Punctuation

Periods

### Gender Neutral Pronouns

### Person

<https://developers.google.com/style/person>

## <dev>Color</dev>

### <motor>MOTONColor</motor>

```md

    #bf6a34

```

### <via>ViaColor</via>

```ts
#f44747
```

### <beta>BetaColor</beta>

```ts
#569cd6 
```

### <ekos>EkosColor</ekos>

```ts
#6a9955 
```

### <anima>AnimaColor</anima>

```ts
#c586c0 
```

### BackgroundColor

```ts
#1f1f1f
```

## Ikon

Ikons are only used to represent Objects or Functions.

### (ElementGroupName + BetaIkon)

Initials like ByrneEuklid

⭐<labor>of Labor???</labor>
🟩 E of EKOS
🔻 V of VIA
🟠 oo of MOTOR
💜 ANIMA

### !Ikon

Concept, Object Property

MOTONTimeline is orange as a header but it is not prefixed with an Ikon.

::: warning Incorrect Syntax
🟠<motor>Arm.🟠<motor>ArmPut()</motor></motor>

Only the 🟠<motor>Arm</motor> object is prefixed with an ikon. ArmPut is orange but has no ikon

🟠<motor>Arm.<motor>ArmPut()</motor></motor>

### PLANTABETA_IKON

KlimBeta has its own Ikon too

Betaglot too

Custom Ikon

Plantors have access to all the ElementGroupIkons

Groups of Animons

:::

### Literal or Metaphorical

### Tree 🌲

### Face Ikons

- Emotion
- Sleep

### Purpose(Ikon)

- Visual Search
- For plantors to use the Ikons
- Each Ikon can be easily handwritten, since electronics don't do well in extreme weather, in terms of breaking and in UX. You can't easily view a screen in summer sun, or rain, definitely not in snow.

The BetaModules are aliased as Ikons.

::: tip ?
When is it useful for Ikons to be monochrome outlines?
:::

### Ambifix for Page Title

### Postfix

- Postfix for

### Prefix

- Prefix for

### Ikon Only

- Which renderer to use for Ikons in images?
    - No shading

`eko`

<beta>`eko`</beta>

<code><motor>eko</motor></code>

```html
<code><motor>eko</motor></code>
```

## <dev>DesignBox</dev>

Add current state of development to desgin box

Boolean

#

Delete tags once converted to headers. They are stored in a JSON

```md

### 🟠 <dev>DesignBox</dev><motor>.MOTON</motor>

```md
---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

-

:::
# 🟠 <motor>MOTON</motor>

```md

### 🟩 <dev>DesignBox</dev><ekos>.Eko</ekos>

```md
---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

-

:::
# 🟩 <ekos>Eko</ekos>

```md

### 🔻 <dev>DesignBox</dev><via>.Via</via>

```md
---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

-

:::
# 🔻 <via>Via</via>

```md

### 💜 <dev>DesignBox</dev><anima>.Anima</anima>

```md
---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

-

:::
# 💭 <anima>Anima</anima>

```md

### 🔷 <dev>DesignBox</dev><beta>.Beta</beta>

```md
---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

-

:::

## 🔷 <beta>Beta</beta>

```md

### 🛠 <dev>DesignBox.Dev</dev>

```md
---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

-

:::

# 🛠 <dev>Dev</dev>

```md

## <dev>Beta Symbols</dev>

```md
🔷
🟠
🟩
🔻
💜
```

## <dev>Links</dev>

How many links is too many?

Every paragraph should have a link

## Grandiosity

### Oversell

### Scale

- Number of Plants
- Scope
- Timeline

### Urgency

### Hero

Save the Day

Plantors are Heros. Many people commented on @antmos Instagram that he was a hero. People already naturally think it.

## Via

Should "via" be used as natural language? "Get to the next page via the link at the bottom of the page"

## <dev>ElementPageDesign</dev>

## <motor>MOTONPage.BaseLayout</motor>

### Definition

> Brief Definition in Blockquote avoid using Via adjectives and other BetaModules

### Taxonomy

#### MOTON.SubMOTON

::: tip

Taxonomy will be useful for D3.js

It doesn't matter if nobody looks at it.

:::

- Subset of MOTON

#### MOTON.SuperMOTON

- Superset of MOTON

```py

ArmKurve.SuperMOTON = ArmMOTON

```

### Images

- Description of a useful image in mind's eye
- Link to image
- Link to PaperPhoto. Draw a rough sketch of the MOTON, be sure to clearly Tag the sketch in the Head of the paper.
    - Capture then Upload the Photo with Phone

### MOTON.Purpose

The purpose is usually affect other BetaElements

### MOTON.AnteMOTON

Syntax: `MOTON.AnteMOTON`

- How they transition to each other

### MOTON.PostMOTON

### MOTON.Via

- How does this MOTON interface with Eko?
- Where in the Via is this MOTON performed?

### MOTON.Eko

Where in Eko is this MOTON performed and on what EkoElement. Put "the ground" if necessary. Nothing is too obvious in formal languages!

### MOTON.Anima

- Control Flow Statements for alternative moves

### MOTON.Error

- Any errors in ControlFlow
- MOTONExecutionError
- Error which is caused by Eko
    - Soil Collapse
    - Wood breaking
- Error Recovery if possible

## <via>ViaPage.BaseLayout</via>

### <via>Via.MOTON</via>

### <via>Via.Anima</via>

### <via>Via.Beta</via>

### <via>Via.Via</via>

## <anima>NeuroPage.BaseLayout</anima>

## <anima></anima>

## <beta>BetaPage.BaseLayout</beta>

## <ekos>EcoPage.BaseLayout</ekos>

## Custom CSS

<https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css>
---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

- Use Code snippets to write abbreviated names to insert Tags or ElementName

<h2>PageTags</h2>

- "Dev.Breadcrumb"
- "Dev.Carousel"
- "Dev.DataType.Array"
- "Dev.DataType.Boolean"
- "Dev.GridView"
- "Dev.HeroImage"
- "Dev.ImageLayer"
- "Dev.LevelOfAbstraction"
- "Dev.LevelOfAbstraction.AbstractIdea"
- "Dev.LevelOfAbstraction.ConcreteIdea"
- "Dev.LevelOfDetail"
- "Dev.LevelOfDetail.ComplexifyDetail"
- "Dev.LevelOfDetail.LessIsMore"
- "Dev.LevelOfDetail.SimplifyDetail"
- "Dev.LevelOfDetail.SimplifyDetail.CropDiagram"
- "Dev.PageLayout"
- "Dev.PageLayout.CloseUp"
- "Dev.RelationByAlignment"
- "Dev.RelationByProximity"
- "Dev.StyleGuide"

:::
