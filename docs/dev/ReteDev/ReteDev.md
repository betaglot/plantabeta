---
search: false
---

# 🕸 Rete Dev

> Networks are graphs where the vertices and edges have attributes

## Graph Theory

- Cycle
- Diameter
- Radius
- 

### Graph Operations and Algorithms

- Find ShortestPath
- Find the Hubs

### Knowledge Graph

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

### Hubs

- Gravity
- Vision
- Attention

### RelationshipTypes

#### Possible Aktion

- HasPossibleAktion
- IsPossibleAktionOf

#### Requires

- Requires
- IsRequiredBy

- RequiresLabon
- IsLabonRequiredBy

- RequiresSomon
- IsSomonRequiredBy

- RequiresEkon
- IsEkonRequiredBy

- RequiresVion
- IsVionRequiredBy

- RequiresMoton
- IsMotonRequiredBy

- RequiresAnimon
- IsAnimonRequiredBy

#### Tool

- IsToolUsedBy
- UsesTool

#### Method

>

- IsMethodOf
- HasMethod

#### Partonomy

> Hand isSubPartOf Mano

> Leg isSubPartOf Stand

- IsSubPartOf
- IsSuperPartOf

#### Taxonomy

> Hand isSubTaxonOf Arm

- IsSubTaxonOf (ChildOf)
- IsSuperTaxonOf (ParentOf)

#### ElementSequence

<!-- ##### SimElement

- IsSimAnimaOf
- IsSimMOTONOf
- IsSimBetaOf
- IsSimVionOf
- IsSimEkonOf
- IsSimLaborOf -->

##### AnteElement

- IsAnteAnimaOf
- IsAnteMOTONOf
- IsAnteBetaOf
- IsAnteVionOf
- IsAnteEkonOf
- IsAnteLaborOf

##### PostElement

- IsPostAnimaOf
- IsPostMotonOf
- IsPostVionOf
- IsPostEkonOf
- IsPostLaborOf
- IsPostSomonOf

#### Relation to Other Faktor

- HasSomon
- HasAnimon
- HasMoton
- HasVion
- HasEkon
- HasLabon

- IsSomonOf
- IsAnimonOf
- IsMotonOf
- IsVionOf
- IsEkonOf
- IsLabonOf

#### Causality

- IsInitiatorOf
- IsErrorOf
- IsResultOf

#### Modify ElementAttribute

- IncreasesKratosOf
- IncreasesTeknikOf
- IncreasesKuboiOf
- IncreasesFrekentiaOf

- DecreasesKratosOf
- DecreasesTeknikOf
- DecreasesKuboiOf
- DecreasesFrekentiaOf

- KratosIncreasedBy
- TeknikIncreasedBy
- KuboiIncreasedBy
- FrekentiaIncreasedBy

- DecreasesKratosOf
- DecreasesTeknikOf
- DecreasesKuboiOf
- DecreasesFrekentiaOf

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

- How can you use Relationships which have already been recorded?

- Make all Links Bidirectional using a PythonScript

- 

:::
