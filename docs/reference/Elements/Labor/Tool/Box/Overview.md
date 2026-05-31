<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "Box"

</script>

# ⭐<span class="labor">Box</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

<PageImage source="Labor_Box.jpeg" />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details &

- [Box.Handle|Site] is the main Site of Box.

- [Box.Corner|Site] is a Site used only when carrying a single box.

- [Box.Consolidate]
    - PartialBox
- Single Box.Transport.Carry
- Double Box.Transport.Carry
    - Stacked not Akimbo
- BETOMs
    - [Box.Drag]
- Box.Attributes
    - Box.Weight
    - Box.Morfos
        - Box.Length
        - Box.Height
            - SummerTrees
            - SpringTrees
        - BoxWidth
    - Box.Material
        - Waxed or Unwaxed
    - Box.PlantCount
    - Box.Species
- Box.Anatomy
    - Box.Handle
    - Box.Corner
    - Box.Edge
    - Box.Flap
    - Box.Lock
    - Box.Side
    - Box.Base

- "MOTON.InstrumentMOTON.BoxMOTON.BoxOpen"
- "MOTON.InstrumentMOTON.BoxMOTON.BoxSlide"
- "MOTON.InstrumentMOTON.BoxMOTON.BoxStack"
- "MOTON.InstrumentMOTON.BoxMOTON.Overview"

:::
