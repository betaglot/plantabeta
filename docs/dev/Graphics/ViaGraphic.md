# 🛠 Via Graphics

## Highlight

[AssassinsCreed](https://www.youtube.com/watch?v=toW9lHSJ5Tg&ab_channel=AKG29)

DareDevil

> "It looks like a world on fire"

## ViaDiagram is a subset of ViaGraphic

## IsochroneMap

IsokroneMap

[I made maps that show time instead of space](https://www.youtube.com/watch?v=rC2VQ-oyDG0&ab_channel=V%C3%A1clavVolhejn)

<https://en.wikipedia.org/wiki/Isochrone_map#:~:text=An%20isochrone%20(iso%20%3D%20equal%2C,areas%20of%20equal%20travel%20time>.

- Isochrones are currently typically computed by via generating shortest-path trees on network graphs, and then generating a convex hull around the accessible nodes.

- Recent techniques in visualization include linking travel times to network edges to show the paths accessible from a point rather than show the area accessible from a point.

## Line Type

DottedLine=Deadwalk

SolidLine=Line

CrossedLine=MarkagedLine

## Montreal Metro Map

| Metro | Via |
| ------ | ------ |
| Station | ViaPoint |
| Line | Curve |
| Water | Water |
| Transfer | ViaCross |
| "MOTON around your city" | "MOTON around your Piece" |

## Density Report

Another way to visualize

Visualize a screenshot

AI to overlay Screenshot with Voronoi Diagram

## Voronoi Diagram

AlsoKnownAs(Tessellation)

Voronoi Daigrams are used to quantify density.

Nearest Neighbor

### Voronoi Interation

Voronoi Iteration Algorithm creates the most evenly spaced sites.

1. Make Centroid of Vorno

### VoronoiCell

The disfigured antecell. Antecell influences current cell

Cells are constructed around sites, the edges of the cell are the midline between two neighboring sites.

All points within the cell are closer to the site than to any other point.

#### Angles of the Voronoi Cell

AcuteAngle

RightAngle

ObliqueAngle

#### Edges of the Voronoi Cell

What is the optimal EdgeCount when planting 6s?

Number of Edges of a Voronoi Cell?

`EdgeCount = NeighborCount`

[D3 closest neighbor and Voronoi edges](https://d3js.org/d3-delaunay/voronoi#voronoi_neighbors)

### <motor>MOTONVoronoi</motor>

### <via>ViaVoronoi</via>

<https://www.researchgate.net/publication/228440675_Spatial_dynamics_of_team_sports_exposed_by_Voronoi_diagrams>

[Automatic Generation of Ice Hockey Defensive Motion via
Coverage Control and Control Barrier Functions
](https://arxiv.org/pdf/2111.10804.pdf)

#### Checking

How are the edges useful for spacing or knowing where to walk when is it advantageous to optimize your position to be a close to middle between trees?

Aim for the convergence points

### <ekos>EcoVoronoi</ekos>

Closest

<iframe width="100%" height="684" frameborder="0"
  src="https://observablehq.com/embed/@d3/circle-dragging-iii?cells=chart"></iframe>

## Assassins Creed

Eagle Vision is Via. Just like [EagleVision](https://www.youtube.com/watch?v=toW9lHSJ5Tg), Via is an abstraction layer onto MOTON and

('lit')InsteadOf('highlighted')

Via can be seen through the land.

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

## GeoPandas

- Follow the lit Path
- ScaleBar
- ViaStartPoint is a Circle
    - Filled circle is Planted
    - Circle Border is NotPlanted

- ViaFinishPoint is a Triangle

<h2>PageTags</h2>

- "Via.ViaCard"
- "Via.ViaDiagram.Overview"
- "Via.ViaDiagram.ViaDirectedLine"
- "Via.ViaDiagram.ViaNotDirectedLine"
- "Via.ViaDiagram.Contact.ContactHighlight"
- "Via.ViaDiagram.ViaTimeline"

:::
