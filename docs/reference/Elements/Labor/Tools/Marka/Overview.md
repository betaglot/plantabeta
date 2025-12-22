<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = ""

</script>

# ⭐<span class="labor">Marka</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

## Marka Frequency

- MarkaCount

## MarkaAttributes

- MarkaColor
- MarkaLength
- MarkaMaterial
- MarkaLocation

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠

- PlantaBeta.Labor.Marka
    - BlockBoundaryFlag
    - WildlifeTreePatch
    - RiparianArea

- KLIMBETA.LaborMarka
    - RouteTape is LaborMarka
    - BonusHold
    - RouteBoundary
    - FinishTaktMarka
        - Takt and not Plast since you can start on a Sidewall
    - StartTaktMarka

:::
