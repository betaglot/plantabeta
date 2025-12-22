<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = ""

</script>

# 🔻<span class="via">Density</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

- 🟩<span class="ekos">HoldDensity</span>
- 🟩<span class="ekos">AirDensity</span>
- 🔻<span class="via">TaktDensity</span>
    - Kontakts per Zone
    - There's lots of places to step
- 🟠<span class="motor">PowerEndurance</span>

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠

- LooseDensity
- TightDensity

- Centroidal Voronoi Tessellation
    - <https://observablehq.com/@d3/circle-dragging-iii?collection=@d3/d3-drag>

:::
