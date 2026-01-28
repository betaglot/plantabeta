---
search: false
---

# 🕸 Rete Dev

> Networks are graphs where the vertices and edges have attributes

## Knowledge GRaph

Rete is a knowledge graph. The nodes are Elements and the Connectors are Relationships between Elements

## ReteFiles

### Rete_RadialTree

### Rete_RadialTree.png

### Rete_RadialTree.svg

### Rete_Core.json

```json


```

### Rete_Links.csv

```csv

source,relationshipType,target

```

### Rete_Links.json

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

#### Modify ElementAttribute

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

- isSimAnimaOf
- isSimMOTONOf
- isSimBetaOf
- isSimVionOf
- isSimEkonOf
- isSimLaborOf

##### AnteElement

- isAnteAnimaOf
- isAnteMOTONOf
- isAnteBetaOf
- isAnteVionOf
- isAnteEkonOf
- isAnteLaborOf

##### PostElement

- isPostAnimaOf
- isPostMOTONOf
- isPostBetaOf
- isPostVionOf
- isPostEkonOf
- isPostLaborOf

#### GeneralRelation

- relatedToAnima
- relatedToMOTON
- relatedToBeta
- relatedToVion
- relatedToEkon
- relatedToLabor

#### Causality

- isInitiatorOf
- isErrorOf
- isResultOf

## Rete_Taxa

### Rete_RadialTree_Growth

The outer ring of Dendrogram is a combination of Faktors

## Analogy(If(Element == Node))

```py
Analogy(
    ({ "Genome": "Network of Genes"} = {"Elementome": "Network of Elements"}),
    ({"Proteome": "Network of Proteins"} = {"Betaretome": "Network of Betaretes"})
)

```

Proteome is the complete set of proteins expressed by an organism.

Your hair doesn't move like your myosin but both are composed of proteins. A hold doesn't move like your Arm but both are composed of BETOMs

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠

- It . Network theory analyses these networks over the symmetric relations or asymmetric relations between their (discrete) components.
- How to use Python to compare config and docs/*

:::
