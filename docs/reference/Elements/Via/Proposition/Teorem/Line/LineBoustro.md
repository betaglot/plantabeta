# 🔻 <span class="via">BoustroLine</span>

> BoustroLine is composed of ParaLine

[Boustrophedon](https://en.wikipedia.org/wiki/Boustrophedon) is from Greek, literally means 'as an ox turns in plowing'.

> The boustrophedon cellular decomposition is a new type of decomposition where the robot's free space is broken down into cells such that the robot can cover each cell with back-and-forth boustrophedic motions. Once a robot covers each cell, it has covered the entire free region of an environment.

## Element Purpose

- AreaCover
-

## Element Attributes

- Width
- TurnCount
- Spacing between Lines

::: details External References

- <https://www.semanticscholar.org/paper/On-Complete-Coverage-Path-Planning-Algorithms-for-Khan-Noreen/ee6bdd20dd58de3c4fe646103e76b46237821d38>
:::

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠

- BoustroLine can be a BodyMOTON like in PlantaBeta or an ArmMOTON when FeelingForHold
    - You don't necessarily need to be planting in a BoustroLine
- ViaDirection
- BackCover
- MarkaTrenchExit
- ConvergentBoustroCover
- DivergentBoustroCover
- BoustroCover isn't straight parallel lines unless BoustroCover perfectly superimposes onto BoustroTrenchLand
- BoustroCover.Direction.Absolute
- BoustroCover.Direction.RelativeTo()

:::
