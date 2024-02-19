::: details 🛠 DesignBox

- https://gwlucastrig.github.io/TinfourDocs/DelaunayIntro/index.html

![DelaunayOptimality](/Route/Voronoi/DelaunayOptimality.png)

<h2>PageTags</h2>

- "Route.RouteGeometry.RoutePoint.CenterPoint"
- "Route.RouteGeometry.RoutePoint.DeadEndPoint"
- "Route.RouteGeometry.RoutePoint.FlagSite"
- "Route.RouteGeometry.RoutePoint.Landmark"
- "Route.RouteGeometry.RoutePoint.Microsite.MicrositeSelection"
- "Route.RouteGeometry.RoutePoint.Microsite.MicrositeStrikeLine"
- "Route.RouteGeometry.RoutePoint.Microsite.MicrositeValidation"
- "Route.RouteGeometry.RoutePoint.Microsite.Overview"
- "Route.RouteGeometry.RoutePoint.Microsite.PlantedMicrosite"
- "Route.RouteGeometry.RoutePoint.Microsite.PotentialMicrosite"
- "Route.RouteGeometry.RoutePoint.MidPoint"
- "Route.RouteGeometry.RoutePoint.Overview"
- "Route.RouteGeometry.RoutePoint.ReferencePoint"
- "Route.RouteGeometry.RoutePoint.ReflectionPoint"
- "Route.RouteGeometry.RoutePoint.RouteConvergencePoint"
- "Route.RouteGeometry.RoutePoint.RouteDivergencePoint"
- "Route.RouteGeometry.RoutePoint.RouteFinishPoint"
- "Route.RouteGeometry.RoutePoint.RouteRefractionPoint"
- "Route.RouteGeometry.RoutePoint.RouteStartPoint"
- "Route.RouteGeometry.RoutePoint.TargetPoint"
- "Route.RouteGeometry.RoutePoint.VertexPoint"
:::

# 🔺 <route>Route Point Overview</route>

## Site vs Microsite

- Sites are the location in Eco where a seedling can be planted, while microsites are the specific locations within a site where the tree is planted. Microsites take into account the roots or rocks which are in obstacles to the seedling. A microsite is the size of your hand, while a site 

___ | **Site** | **Microsite**
--- | --- | ---
**Size** | Thing | OtherThing


## Point Interpolation

- Interpolation is a type of estimation, a method of constructing (finding) new data points based on the range of a discrete set of known data points.

### Voronoi Diagram

- Spacing between Sites.
- Dual with Delaunay Triangulation


#### Descriptions of Voronoi Cell Shape

- Platonic Shapes
    - Triangle, Square, Pentagon, Hexagon 

- Angular

- Slice

- Thin

Round

Hexagonal

#### Voronoi Iteration

Makes the Voronoi Cells more 

### Delaunay Triangulation

- Decompose a plane polygon into Triangles

[TriangleFill](/reference/Route/AreaFill/TriangleFill)