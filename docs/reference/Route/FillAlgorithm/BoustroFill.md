# 🔺 <route>BoustroFill</route> 🔺

![Boustrophedon](/Boustrophedon.jpg)

[Boustrophedon](https://en.wikipedia.org/wiki/Boustrophedon) is from Greek, literally means 'as an ox turns in plowing'.

> The boustrophedon cellular decomposition is a new type of decomposition where the robot's free space is broken down into cells such that the robot can cover each cell with back-and-forth boustrophedic motions. Once a robot covers each cell, it has covered the entire free region of an environment.

## Element Purpose

- [AreaFill]()
- 


## Element Properties

- Width
- TurnCount
- Spacing between Lines
- RouteDirection

## Element Geometry

- Cellular Decomposition Algorithm like Delaunay Triangulation or Voronoi Decomposition

## ElementRelationshipsGraph

Graph which represents how this element is related to other elements in Plantbeta.
<iframe 
    width="100%" 
    height="500" 
    frameborder="0"
    src="https://observablehq.com/embed/@d3/force-directed-graph/2?cells=chart"
></iframe>

## RouteElements

### [TeamPlant](/reference/Route/TeamPlant/Overview)
- 

### [TurnAround]()
- Turn around at the end of each line. 

### [RouteCurve]()
- 

### [ParallelLine]()
- 

### [RouteDirection]()
- Direction change

### [BackFill]()
- 

### [AreaShape]()
- 

### [ZigZag]()
- 

## EcoElements

### [TrenchLand]

### [SlopedLand]()
- Travel across the Eco instead of up and down
- Description of how this RouteElement relates to a particular [EcoElement](/reference/Eco/EcoOverview).

### [Obstacle]() Preventing BoustroFill

#### FallenTree

## NeuroElements
- Description of how this RouteElement relates to a particular [<neuro>NeuroElement</neuro>]().
- Description of how this RouteElement relates to a particular [<neuro>NeuroElement</neuro>]().
- Description of how this RouteElement relates to a particular [<neuro>NeuroElement</neuro>]().

## MoveElements
- [TurnAround]
- Description of how this RouteElement relates to a particular [<move>MoveElement</move>]().
- Description of how this RouteElement relates to a particular [<move>MoveElement</move>]().

## Examples

- Use Media donated by Planters. 

## Related RouteElements

Links to other related RouteElements. 

- [BackFill]()
- [FlagTrenchExit]()
- [ConvergentBoustroFill]()
- [DivergentBoustroFill]()

::: details External References

- https://www.semanticscholar.org/paper/On-Complete-Coverage-Path-Planning-Algorithms-for-Khan-Noreen/ee6bdd20dd58de3c4fe646103e76b46237821d38

:::



