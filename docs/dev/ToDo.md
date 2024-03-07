# ToDo

## Translate Tags to Headers

Go TopDown through the directories

1. Start with the Module Overviews
    - Some of the tags in the overview will become their own Pages. 
    - **Remember to transfer the PaperPhotos to the new page too**
2. MotoPages
3. ViaPages
4. NeuroPages
5. BetaPages

```py
TagsToHeaders: False
```

Update to `True` once completed

## <moto>MotoPage.BaseLayout</moto>

### Definition

> Brief Definition in Blockquote avoid using Via adjectives and other BetaModules

### Taxonomy

#### Moto.SubMoto

::: tip

Taxonomy will be useful for D3.js

It doesn't matter if nobody looks at it.

:::

- Subset of Moto

#### Moto.SuperMoto

- Superset of Moto

```py

ArmSwing.SuperMoto = ArmMoto

```

### Images

- Description of a useful image in mind's eye
- Link to image
- Link to PaperPhoto. Draw a rough sketch of the Moto, be sure to clearly Tag the sketch in the Head of the paper.
    - Capture then Upload the Photo with Phone

### MotoPurpose

The purpose is usually affect other BetaElements

### Moto.AnteMoto

Syntax: `Moto.AnteMoto`

- How they transition to each other

### Moto.PostMoto

### Moto.Via

- How does this Moto interface with Eco?
- Where in the Via is this Moto performed?

### Moto.Eco

Where in Eco is this Moto performed and on what EcoObject. Put "the ground" if necessary. Nothing is too obvious in formal languages!

### Moto.Neuro

- Control Flow Statements for alternative moves

### Moto.Error

- Any errors in ControlFlow
- MotoExecutionError
- Error which is caused by Eco
    - Soil Collapse
    - Wood breaking
- Error Recovery if possible

## <via>ViaPage.BaseLayout</via>

### Via.Moto

### Via.Neuro

### Via.Beta

### Via.Via

## <neuro>NeuroPage.BaseLayout</neuro>

## <beta>BetaPage.BaseLayout</beta>

## <eco>EcoPage.BaseLayout</eco>

<!-- ## <s>Add Tags to each Page's Design Box</s>

1. Make dict `PageNamespace: [TagName]`
    - PagePathAndTags.json
2. Copy all Tags from PagePathAndTags.json to each Page
    - Make a script which puts all the tags into code boxes which can be copied
 -->

<!-- ## Add PaperPhoto to <dev>DesignBox</dev>

1. <s>Make dict `PageNamespace: [TagName]`</s>

2. <s> Make dict `PaperPhoto: [TagName]`</s>

3. <s>Make a dict `PageNamespace: [PaperPhoto]`</s> -->

## Add PaperText to <dev>DesignBox</dev>

::: tip

PaperText is most useful for fine details. It should be done after Dictation and after DesignBox to Headers.

:::

1. Get PutPlantPaperText
    - Find most recent PaperText
    - Upload PaperText to SQlite
    - Select of all the PaperText which has a PaperPhoto in PutPlant's repo

## Add Definition to each element

- Cambridge Dictionary
- '>'
- Not capitalized

```md
> brief single line definition  
```
