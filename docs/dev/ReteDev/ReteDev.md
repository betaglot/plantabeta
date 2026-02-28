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

#### BETOM To ELEMENT

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

Dependencies

- "_Requires_The_Labon_","_Is_A_Labon_Required_By_"
- "_Requires_The_Somon_","_Is_A_Somon_Required_By_"
- "_Requires_The_Ekon_","_Is_An_Ekon_Required_By_"
- "_Requires_The_Vion_","_Is_A_Vion_Required_By_"
- "_Requires_The_Moton_","_Is_A_Moton_Required_By_"
- "_Requires_The_Animon_","_Is_An_Animon_Required_By_"

#### Tool

- "_Is_A_Possible_Tool_Of_","_Has_A_Possible_Tool_"

#### Method

> Plantafor,HasTheMethod,Don

- "_Is_A_Possible_Method_Of_","_Has_The_Possible_Method_"

#### Partonomy

::: danger

SubParts must be of the same Faktor

Leg is NOT a SubPart of Stand, Kryos IsSubPartOf Stand since Kryos and Stand are both LABONs

:::

> Orbit IsSuperPartOf Mano

taxonomy divides things into kinds (types/species) based on similarities, while partonomy divides a whole into its constituent parts (components). Taxonomies focus on is-a relationships (e.g., a car is-a vehicle), whereas partonomies focus on part-of relationships (e.g., a wheel is part-of a car).

The SuperPart doesn't exist without SubPart

- "_Is_A_Part_Of_","_Has_The_Part_"

#### Taxonomy

> Hand isSubTaxonOf Arm

taxonomy divides things into kinds (types/species) based on similarities, while partonomy divides a whole into its constituent parts (components). Taxonomies focus on is-a relationships (e.g., a car is-a vehicle), whereas partonomies focus on part-of relationships (e.g., a wheel is part-of a car).

- "_Is_A_SubTaxon_Of_", (ChildOf)
- "_Is_A_SuperTaxon_Of_", (ParentOf)

- "_Is_An_Ancestor_Of_","_Has_The_Ancestor_"
-

#### ElementSequence

<!-- ##### SimElement

- IsSimAnimaOf
- IsSimMOTONOf
- IsSimBetaOf
- IsSimVionOf
- IsSimEkonOf
- IsSimLaborOf -->

##### AnteElement

- "_Is_AnteAnima_Of_",
- "_Is_AnteMoton_Of_",
- "_Is_AnteVion_Of_",
- "_Is_AnteEkon_Of_",
- "_Is_AnteLabor_Of_",

##### PostElement

- "_Is_A_PostAnima_Of_",
- "_Is_A_PostMoton_Of_",
- "_Is_A_PostVion_Of_",
- "_Is_A_PostEkon_Of_",
- "_Is_A_PostLabor_Of_",
- "_Is_A_PostSomon_Of_",

#### Possible Relation to Other Faktor

- "_Is_A_Possible_Labon_Of_","_Has_The_Possible_Labon_",
- "_Is_A_Possible_Somon_Of_","_Has_The_Possible_Somon_",
- "_Is_A_Possible_Ekon_Of_","_Has_The_Possible_Ekon_",
- "_Is_A_Possible_Vion_Of_","_Has_The_Possible_Vion_",
- "_Is_A_Possible_Moton_Of_","_Has_The_Possible_Moton_",
- "_Is_A_Possible_Animon_Of_","_Has_The_Possible_Animon_",

#### Causality

- "_Is_A_Possible_Initiator_Of_","_Has_The_Possible_Initiator_"
- "_Is_An_Error_Of_","_Has_The_Possible_Error_"
- "_Is_A_Possible_Result_Of_","_Has_The_Possible_Result_"

#### Modify ElementAttribute

- "_Increases_The_Kratos_Of_","_Kratos_Increased_By_"
- "_Increases_The_Teknik_Of_","_Teknik_Increased_By_"
- "_Increase_The_Kuboi_Of_","_Kuboi_Increased_By_"
- "_Increases_The_Frekentia_Of_","_Frekentia_Increased_By_"

- "_Decreases_The_Kratos_Of_","_Kratos_Decreased_By_"
- "_Decreases_The_Teknik_Of_","_Teknik_Decreased_By_"
- "_Decreases_The_Kuboi_Of_","_Kuboi_Decreased_By_"
- "_Decreases_The_Frekentia_Of_","_Frekentia_Decreased_By_"

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
