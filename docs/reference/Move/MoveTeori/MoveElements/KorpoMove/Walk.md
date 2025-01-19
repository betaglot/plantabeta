# 🟠 <move>Walk</move>

![MoveIkon](/Move/Move_Ikon.png)

## Walk.Purpose

- Walk is the most frequent top level Move

## Walk.Attributes

### StepLength

Small step on slab so nice steadicam torso is difficult due to high complexity geometry between spine torso shin hip

Small step is less change between steps therefore less compensation each step

Compensation is also less dynamic ie acceleration modulation is low. You don't need to monitor inframovement as much

Aim small miss small. Larger moves have larger potential for error

## Subset of Walking

### WalkIn and WalkOut

- Walking while carrying all your gear. WalkIn towards your cache
- WalkIn occurs when the truck can't drop you off close to your cache.
- Sometimes some of your gear will be brought by your supervisor on with an ATV or being carried.
    - Use case for a [Cart](/dev/Instruments#cart)

### Deadwalk

- How can Deadwalk become useful, probably for Via.
- Walking within a piece while **not** performing a planting Frase.
- Deadwalks are required to Cover very oblong areas.

## Walk.Metod

- LengthenStep() mid step Or ShortenStep()

## 🕸 Walk.Skema

### Related 🟩<eko>Eko</eko>

-

### Related 🔻<via>Via</via>

- WalkSpeed

### Related 🟠<move>Move</move>

-

### Related 💜<psike>Psike</psike>

-

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠 <dev>&&&</dev>

- WalkSpeed
    - RelativeToAtlete
    - Velocity
- GaitWidth
    - Inline like a Wolf or Wide like a crab
- StrideLength
    - Shorten StrideLength during SlopeUpWalk or SlopeDownWalk
    - Shorten StrideLength on UnstableSlope
- (ArmAmble + Walk) on SteepSlope
- StompTest when LogWalking

<h2>PageTags</h2>

- "Move.BodyMove.Walk"

:::
