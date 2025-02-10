# 🕸 Skema Dev

## SkemaFiles

### Skema_RadialTree

### Skema_RadialTree.png

### Skema_RadialTree.svg

### Skema_Core.json

```json


```

### Skema_Links.csv

```csv

source,relationshipType,target

```

### Skema_Links.json

```json
{
    "source": str,
    "target": str,
    "description": str,
    "relationshipType": str,
    "link_ID": int
}

```

## NodeLinks

### RelationshipTypes

#### Taxonomy

- isA
- hasA

#### Modify ElementAtribut

- Kratos++
- Teknik++
- Kuboi++
- Frekentia++
- Kratos--
- Teknik--
- Kuboi--
- Frekentia--

#### ElementSequence

##### SimElement

- isSimPsikeOf
- isSimMooveOf
- isSimBetaOf
- isSimViumOf
- isSimEkonOf
- isSimLaborOf

##### AnteElement

- isAntePsikeOf
- isAnteMooveOf
- isAnteBetaOf
- isAnteViumOf
- isAnteEkonOf
- isAnteLaborOf

##### PostElement

- isPostPsikeOf
- isPostMooveOf
- isPostBetaOf
- isPostViumOf
- isPostEkonOf
- isPostLaborOf

#### GeneralRelation

- relatedToPsike
- relatedToMoove
- relatedToBeta
- relatedToVium
- relatedToEkon
- relatedToLabor

#### Causality

- isInitiatorOf
- isErrorOf
- isResultOf

## Skema_Taxa

### Skema_RadialTree_Growth

The outer ring of DendroChart is a combination of BetaTypes