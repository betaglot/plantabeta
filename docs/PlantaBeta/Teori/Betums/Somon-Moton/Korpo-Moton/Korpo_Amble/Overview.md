# 🟠 <motor>Amble</motor>

![MOTONIkon](/Ikon/Motor_Ikon.png)

## Amble.Purpose

- Amble is the most frequent top level MOTON

## Amble.Attributes

### StepLength

Small step on slab so nice steadicam torso is difficult due to high complexity geometry between spine torso shin hip

Small step is less change between steps therefore less compensation each step

Compensation is also less dynamic ie acceleration modulation is low. You don't need to monitor inframovement as much

Aim small miss small. Larger moves have larger potential for error

## Subset of Ambleing

### AmbleIn and AmbleOut

- Ambleing while carrying all your gear. AmbleIn towards your cache
- AmbleIn occurs when the truck can't drop you off close to your cache.
- Sometimes some of your gear will be brought by your supervisor on with an ATV or being carried.
    - Use case for a [Cart](/dev/Instruments#cart)

### Deadwalk

- How can Deadwalk become useful, probably for Via.
- Ambleing within a piece while **not** performing a planting Frase.
- Deadwalks are required to Cover very oblong areas.

## Amble.Metod

- LengthenStep() mid step Or ShortenStep()

## 🕸 Amble.Skema

### Related 🟩<ekos>Eko</ekos>

-

### Related 🔻<via>Via</via>

- AmbleSpeed

### Related 🟠<motor>Motor</motor>

-

### Related 💜<anima>Anima</anima>

-

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠

- AmbleSpeed
    - RelativeToAtlete
    - Velocity
- GaitWidth
    - Inline like a Wolf or Wide like a crab
- StrideLength
    - Shorten StrideLength during SlopeUpAmble or SlopeDownAmble
    - Shorten StrideLength on UnstableSlope
- (ArmAmble + Amble) on SteepSlope
- StompTest when LogAmbleing

<h2>PageTags</h2>

- "MOTON.BodyMOTON.Amble"

:::
