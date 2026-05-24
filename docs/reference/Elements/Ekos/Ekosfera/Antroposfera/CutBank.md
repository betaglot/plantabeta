<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "CutBank"

</script>

# 🟩<span class="ekos">CutBank</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details &

- Space off the edge of the cutbank
- Perimeter
    - [Piece|Perimeter]
- Cutbank can be the boundary of EKONs:
    - Road
    - Landing
    - Riparian
        - ToeErosion
- Mounds have boundaries analogous to cut banks, but are an order of magnitude smaller in size

:::
