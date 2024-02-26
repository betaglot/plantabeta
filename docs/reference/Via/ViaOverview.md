::: details 🛠 <dev>DesignBox</dev> 
<h2>PageTags</h2>

- "Neuro.Vision"
- "Neuro.Vision.Find.BackLine"
- "Neuro.Vision.Find.FarSide"
- "Neuro.Vision.Find.FindFirstBagUp"
- "Neuro.Vision.Find.Flag"
- "Neuro.Vision.Find.Overview"
- "Neuro.Vision.Hidden"
- "Neuro.Vision.SeenFromCache"
- "Via.Direction"
- "Via.Overview"
- "Via.ReadLand"
- "Via.ViaAnalysis"
- "Via.ViaDirection.ViaDownSlope"
- "Via.ViaDirection.ViaTraverseSlope"
- "Via.ViaDirection.ViaUpSlope"
- "Via.ViaError"
- "Via.ViaError.Deadwalking"
- "Via.ViaError.PinchedArea"
- "Via.ViaError.RedundantVia"
- "Via.ViaError.TooClose"
- "Via.ViaError.TooFar"
- "Via.ViaEvent"
- "Via.ViaEvent.AreaClosed"
- "Via.ViaEvent.CompletionEvent"
- "Via.ViaEvent.PositionEvent"
- "Via.ViaGrid"
- "Via.ViaGrid.ViaHexagonGrid"
- "Via.ViaGrid.ViaSquareGrid"
- "Via.ViaGrid.ViaTriangleGrid"
- "Via.ViaName"
- "Via.ViaProperties.Overview"
- "Via.ViaProperties.ViaAccuracy"
- "Via.ViaProperties.ViaLength"
- "Via.ViaProperties.ViaPermutation"
- "Via.ViaProperties.ViaPrecision"
- "Via.ViaProperties.ViaTreeCount"
- "Via.ViaQuestion"
- "Via.ViaShape"
- "Via.ViaShape.ViaNegativeShape"
- "Via.ViaSuperposition"
- PlantingProcess_LandApproach_FlyIn_Helicopter
- PlantingProcess_LandApproach_WalkIn_WalkInTime
- PlantingProcess_LandBriefing_FingerPointing_ArmMotoment
- PlantingProcess_LandBriefing_PlanterSupervisor_BlockDiagram
- PlantingProcess_LandBriefing_PlanterSupervisor_LandDiagram
- PlantingProcess_LandManagement_Error_DeadWalking_Definition_
- PlantingProcess_LandManagement_Error_PinchedLand_WasteOfEnergy_
- PlantingProcess_LandManagement_Landmark_Boulder_RelativeLocation_
- PlantingProcess_LandManagement_Landmark_HighStump_BlockDiagram_
- PlantingProcess_LandManagement_Landmark_RelativeLocation
- PlantingProcess_LandManagement_Landmark_Treeline_DistinctiveTree_
- PlantingProcess_LandManagement_Landmark_TrenchDirection_FlipSide_
- PlantingProcess_LandManagement_Landmark_WaterFeature_Pond_
- PlantingProcess_LandManagement_LandSection_Geometry_Linguistics_Shorthand_SimplifiedShape_
- PlantingProcess_LandManagement_Orientation_Landmark_LandmarkAlignment_
- PlantingProcess_LandManagement_PartnerPlanting_InsideLandBorderline_LandDiagram_
- PlantingProcess_LandManagement_PartnerPlanting_InsideLandBorderline_TreeFlag_
- PlantingProcess_LandManagement_PlanterEfficiency_DeadWalking
- PlantingProcess_LandManagement_ViaLine_OptimalViaLine_StraightLine_
- PlantingProcess_LandManagement_TreeCacheLocation_RoadCacheAboveLand_LineIn_WalkDownSlope
- PlantingProcess_LandManagement_TreeCacheLocation_RoadCacheAboveLand
- PlantingProcess_LandManagement_TreeCacheLocation_RoadCacheBelowLand_LandCache_
- PlantingProcess_LandManagement_TreeCacheLocation_RoadCacheBelowLand_LineIn_WalkUpSlope
- PlantingProcess_LandManagement_TreeDensity_CirclePlot_RequiredTool_PlotCord
- PlantingProcess_LandManagement_TreeDensity_PlantingInspector_Plot_CirclePlot
- PlantingProcess_LandManagement_TreeDensity_Units_StemsPerHectare_
- PlantingProcess_LandManagement_TreeDensity_VisualPlot_Brain_
- PlantingProcess_LandManagement_TreeSpacing_MinimumTreeSpacing_ResidualLand_

- PlantingProcess_LastBagUp_BagOutTime_PlanterPickUpTime_PlanterSupervisor_
- PlantingProcess_LastBagUp_Finish=CountdownTo(TreeCount=0)_PlantingEfficiency
- PlantingProcess_LastBagUp_FinishByLand_BlockClosure
- PlantingProcess_LastBagUp_FinishByTreeCount_TargetTreeCount
- PlantingProcess_LastBagUp_WalkOut_WalkOutTime
- PlantingProcess_Replant_MissedLand_TreeFlag												
- PlantingProcess_Replant_MissedMicrosite_TreeFlag			

> Optimal vialine has zero displacement from via start to via finish, both are at the cache

:::

# 🔺 <via>Via Overview</via>
![](/Via/Via_Emoji.png)


## What is a Via?

- Computational Geometry
- The interface between Moto, Neuro and Eco.
- Via is an abstract layer on top of Eco. A via is where the Planter
- A vias start and finish at the Cache.

### Purpose of Via

- Minimize Deadwalking
- To be able to have a detailed mental model of your land, so that you can plan how you're going to fill your lang.


> a particular way or direction between places

> a method of achieving something


Also Known As "Land Management"

[Routing](https://dictionary.cambridge.org/dictionary/english/routing)

> the use of a particular path or direction for something to travel or be placed




## AreaChunking

Polygon Decomposition

- [Triangulated irregular network](https://www.researchgate.net/publication/23541399_Algorithms_for_Visibility_Computation_on_Terrains_A_Survey)

## Routing Scope

PieceFill > AreaFill > ViaCurve > ViaPoint

## GeneralDirection

## FillPattern

> A *FillPattern* is the ViaCurve, 

> A Series of Points

### Complete Coverage Path

> Complete coverage path planning algorithm, on the other hand, is used in application where an autonomous mobile robot is required to visit all the points at least once in the given environment size with known obstacles.

- Vacuuming
- Lawn Mowing
- Mopping
- Dish Pit
- [Boustrophedon](https://en.wikipedia.org/wiki/Boustrophedon)

![Boustrophedon](/Boustrophedon.jpg)


Don't go over the same place more than once.
- No Overlap

- https://www.frontiersin.org/articles/10.3389/frobt.2021.624333/full

- https://www.researchgate.net/figure/Complete-coverage-path-planning-in-an-unstructured-Eco_fig3_8345839

## Target
- TargetLandMark
    - LineIn uses a TargetLandmark

## ViaError

- Deadwalking
- GhostLine

## FillError

### PinchedEco

- FrontFillError

#### Occurs in 
- PinchedArea
- PinchedPiece
- 

## $$$
- Via Affects productivity the most because via has deadwalking and cache positioning. Via Starts and Finishes at the cache. 

- Even the most atheletic planter is wasting time during deadwalking. Minimizing deadwalking benefits all planters and supervisors.

