# 🔻 <via>BoustroCover</via>

![Boustrophedon](/Boustrophedon.jpg)

[Boustrophedon](https://en.wikipedia.org/wiki/Boustrophedon) is from Greek, literally means 'as an ox turns in plowing'.

> The boustrophedon cellular decomposition is a new type of decomposition where the robot's free space is broken down into cells such that the robot can cover each cell with back-and-forth boustrophedic motions. Once a robot covers each cell, it has covered the entire free region of an environment.

## Element Purpose

- AreaCover
-

## Element Attributes

- Width
- TurnCount
- Spacing between Lines
- ViaDirection

## Element Geometry

- Cellular Decomposition Algorithm like Delaunay Triangulation or Voronoi Decomposition

## BetaGraph

Graph which represents how this element is related to other elements in PlantaBeta.
<iframe
    width="100%"
    height="684"
    frameborder="0"
    src="https://observablehq.com/embed/@d3/force-directed-graph/2?cells=chart"
></iframe>

## 🔻<via>ViaFactors</via>

### [TeamCover](/encyclopedia/Via/TeamPlant/Overview)

-

### TurnAround

- Turn around at the end of each line.

### ViaCurve

-

### ParallelCurve

-

### ViaDirection

- Direction change

### BackCover

-

### AreaShape

-

### ZigZagCurve

-

## 🟩<eko>EcoFactors</eko>

### [TrenchLand]

### SlopedLand

- Travel across the Eko instead of up and down
- Description of how this ViaFactor relates to a particular [EcoFactor](/encyclopedia/Eko/EcoOverview).

### Obstacle Preventing BoustroCover

#### FallenTree

## 💜<psike>NeuroFactors</psike>

-

## 🟠<move>MotoFactors</move>

- TurnAround

## Examples

- Use Media donated by Planters.

## Related ViaFactors

Links to other related ViaFactors.

- BackCover
- FlagTrenchExit
- ConvergentBoustroCover
- DivergentBoustroCover
::: details External References

- <https://www.semanticscholar.org/paper/On-Complete-Coverage-Path-Planning-Algorithms-for-Khan-Noreen/ee6bdd20dd58de3c4fe646103e76b46237821d38>
:::

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

- BoustroCover isn't straight parallel lines unless BoustroCover perfectly superimposes onto BoustroTrenchLand
- BoustroCover.Direction.Absolute
- BoustroCover.Direction.RelativeTo()

:::
