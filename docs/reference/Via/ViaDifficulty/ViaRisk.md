# 🔷🔺 <via>Via</via> Risk

## Definition

- Probability of completing a <via>Via</via> or <via>Via</via> section.
    - Improbable, Remote, Occasional, Probable, Frequent
- Consequences of ViaError
    - Negligible, Marginal, Moderate, Critical, Catastrophic

## Examples of <via>Via</via> Risk

## Low <via>Via</via> Risk

- MultipleViaSurfaces, there is a risk that you’ll choose the wrong ViaSurface.
- Clearly defined Via, where every hold can easily be seen.
- Leave enough space on hold for Match or Swap.

## High <via>Via</via> Risk

- Small <via>Via</via> Surface Size
- HiddenViaSurface
    - Blind <via>ViaSurface</via>
    - Blindfolding can a ForcedBeta. Vision is a NeuroElement which can be removed.
    - Blind Landing
- A <via>Via</via> with dead ends.
- Forced <via>Via</via> sequence
    - ClockMove
    - HandSwap on SmallSurface.
- Limited <via>ViaSpace</via>
    - PocketHold
    - CrackWall

## Advantage

Advantage over other Climbers.

- Risk increases in Competition when the Friction of ViaSurfaces decreases when Holds become TooChalky.

- Risk decreases when ViaSurfaces are Prechalked.

## <via>Via</via> Risk Factors

### Accuracy

TargetSurfaceForm

- Limited Angle of Approach

TargetSurfaceSize

- NoSurfaceLeft

SmallHold.Via.R+

- TicMark
    - TicMark decreases Risk
- PocketHold
    - BowlingBallHold\Crux of Biographie (5.15a)

- Risk increases when there is only a small part of a SmallHold which must be hit perfectly, i.e. there is little margin of error of FingerPlacement on a ViaSurface.

- Risk increases when there is a limited range of directions (vectors) in which to load a ViaSurface.

- StabMovement
    - HangingFootTransfer ->
    - FootStab.FootJam
    - FootStab.FootSlot
    - FootStab to a SmallFootHold
    - HandStab during a PaddleDyno

AccurateTiming

- MovementTimingError
- TimeLimit
    - The faster a Climber moves, the more time they have to get to TargetSurface or RestPosition.
    - Climbers can wait longer if they can move fast.
- ReflexSpeed
- When the Climber needs to get a ClimberPart to a ViaSurface

- Risk increases when Movement timing has a small margin for error.
    - CoordinationMovement, Dyno.HandRelease, ArmBrake, FootStab, ReleaseMovement
    - ([Hand,Foot])Catch On(Maximum([Arm,Leg])Reach)

### Commiting

- RiskOfInjury

> “It’s hard to push yourself to the absolute limit when you’re really high up” - Chris Sharma, ReelRock12

Commitment.ViaRisk(-)

### Hidden Via Surface

Definition(HiddenViaSurface)

- A ViaSurface which can’t be seen from a Climber’s ViaPosition.
- A HiddenViaSurface increases the Risk of a Movement.

Quote

> “There’s a chance that you’ll miss it”

> “I can’t see it”

> “How good is the hold, I can’t see it from the ground?”

HiddenViaSurface.MotoRisk(-)

- A ViaSurface which was recently visible from AnteViaPosition is lower Risk than a HiddenViaSurface which isn’t seen until CurrentViaPosition or PostViaPosition.
    - MotoRisk.HiddenViaSurface(TopOut.TargetSurface > SitStart.StartHold)

Hidden ByViaSurfaceSize

- Some ViaSurfaces are so small that they can’t be seen.

HiddenByViaForm

- Can’t be seen from Current EyePosition.
    - ViaPosition
    - MotoPosition

- SwapMovement on ViaSurface.
- UnderclingGrip when you can’t see from Distal of Elbow.
- FootHold

- HiddenByShadow
    - A ViaSurface can be Hidden in a Shadow
        - What ViaSurfaceType is most easily HiddenByShadow?
            - SmallSurface

    - HiddenByNoShadow
        - HiddenByNoShadow only applies to RockWalls, since ArtificialHolds are almost always a different color from the wall and artificial lighting doesn’t ever vary.
        - Shadows help Climbers to see the 3Dimensional form of ViaSurfaces.
        - There are no Shadows when the light is directly shining on the Wall.

- Mnemonic of ViaSurfaceLocation decreases Risk.
    - (ViaSurfaceLocation)RelativeTo(Via, Climber, (Via+Climber))
    - Using a distinct part of the wall on the Climber’s side of an OutsideCornerWall as a guide for the ViaSurface on the Hidden side of the CornerWall.
    - TicMark
        - TicMark decreases Risk.
    - TicMark can’t be unseen, just like a story spoiler.
    - TicMarks prevent OnsightAttempt.
    - Knowing the location of all the holds and ViaSurfaces decreases Risk.

- Hold hidden under a Volume
- ViaSurface is Hidden around a CornerWall
    - VerticalCornerWall (Arete)
    - HorizontalCornerWall (Bulge, TopOut)
        - Foothold is hidden from Climber since it is below a BulgeWall

- HiddenByClimber
    - Hidden from Eyes by HeadPosition, HeadOrientation, Facing the wrong way.
    - NeckRotateError can cause MovementError and Fall. Fall caused by MovementError of a submovement which isn’t contacting the wall, such as HeadMovement.
    - Leg hides a HandFootMatch.
    - Climber’s chest too close to the wall to Look down at a Hold.
        - LookAt.MovementError(ChestTooClose)
- JumpStart
    - When performing a JumpStart, Climbers can’t see what the ViaSurface is like.

### Irreversible

Definition(Irreversible)

- A Moto which can’t be reversed.
- A Via section which can’t be DownClimbed.
- DownClimb not possible.

Irreversible.ViaRisk(High)

- Deadpoint from a NonJugHold
- ViaSurfaces which use StaticUpMovements that finish with FingertipPress and can’t start with FingertipPress when DownClimbing.
- DynamicDownMovement is not possible because it will overload StaticFrictionThreshold.

ViaGap

- GapJump
    - TowerJump
        - Czech Tower Jumping | The New York Times
    - FallOver.FootStab
        - AlexHonnoldKarateKick

Irreversible.ViaRisk(Low)

- OverhangWall DownClimb
- ViaSections which are reversible but with at least a moderate probability of resulting in a Fall.
- OverhangWall

### ViaSurface

RiskViaSurface

- Definition(ViaSurface)
    - A surface in a Via upon which the Climber applies a force.

Quote

- MarginalHold
- HeinousHold

ViaSurface.MotoRisk(+)
    - Risk of Slipping off ViaSurface.
        - AlexHonnold on the FreeblastSlab in FreeSoloMovie.
        - NoShadowHold
        - SlightConcavitySurface

- Risk of not being able to Successfully load TargetSurface.
- Unable to RepositionFinger on ViaSurface once the ViaSurface is caught HandCatch
    - Unable to RepositionFinger on ViaSurface once the Surface is loaded.\HandCatch

ViaSurface.ViaRisk(+)
    - PolishedGraniteInsideCornerWall
        - HazelFindlay\TaintedLove\
            - <https://www.youtube.com/watch?v=nPtdvfqYrdY>

SmallHold

- NoSurfaceLeft
- SmallFootViaSurface
    - FootSwap, FootStab

ViaSurface.Risk(++)

- Decrease ViaSurface CoefficientOfFriction
- SmoothTexture increases Risk since there is less Friction, therefore there is a great chance of FootSlip.

### OffVia

Definition(OffVia)

- Lost
- Climbing on a part of the Wall which is not part of the Via.

(Risk.OffVia)ProportionalTo(DistanceFromProtection)

- How difficult is it to get back on the Via.

ViaFinding while on Wall.

### No Revovery

NoRecovery.ViaRisk(+)

- SloperHold
- ConvexSurface
