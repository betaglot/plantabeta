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

- Find GraphShortestPath
- Find GraphDiameter
- Find the GraphHubs
- Calculate the (InDegree, OutDegree, TotalDegree) of each Element
- RelationshipStatistics
    - RelationshipDistribution
    - RelationshipFrequency
        - OrderBy(RelationshipClass)
    - RelationshipClassFrequency

- UsesSomon

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

### RelationshipClasses

Most useful for inheritance.

- If it seems like you're adding too much redundancy, then chill, RefinementRequiresExcess. You're nowhere near computing limits. Maybe once you get to a million rows, then you can worry about redundancy.
    - The greatest danger of redundancy is corruption, where changes don't cascade out, ripple out. Things will change during dev. BETAGLOT hasn't stabilized yet

- IsFaktor
- HasLabon
    - IsSubAktionOf
    - IsSuperAktionOf

### Hubs

> Elements which are connected to many Elements

- Gravity
    - Most Aktions
- Vision
    - Most Aktions
- Attention
    - Most Aktions
    - Most Animons

### RelationshipTypes

Make the Relationships Phrases instead of just Names, to be more semantically precise

#### Possible

- IsPossibleElementOf
- HasPossibleElement

#### Aktion

- RequiresAktion
- IsRequiredAktionOf

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

::: danger

SubParts must be of the same Faktor

Leg is NOT a SubPart of Stand, Kryos IsSubPartOf Stand since Kryos and Stand are both LABONs

:::

> Hand isSubPartOf Mano

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
    - HasLabon
        - UsesTool
        - IsSubAktion
            - Append "HasLabon" Relationship when
        - RelationshipClasses
    - IsFaktor

- Make all Links Bidirectional using a PythonScript

- Elements are not Ante or Post, since Ante and Post are Time and elements can only access time as elements (members) of BETOMs
    - RequiredAnte isn't the same as PossibleAnte
        - <BB labor="Onda" via="Back"/> A foreswing requires a Backswing

- CompletenessCheck

- GraphCorruptionTest

- Implications
    - All Korpo Aktions also have arm, leg, spine as RequiredSomon
    - Arm doesn't always imply Hand and visa versa, same with Leg and Foot
    - Opposite Aktions have the same Somons
        - Regress, Progress
        - Flex, Extend
        - Addukt, Abdukt
        - Protrakt, Retrakt

:::
