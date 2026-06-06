<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "Humidity"

</script>

# 🟩<span class="ekos">Humidity</span>🟩

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details &

- Precipitation

- WetSlash
- Not drying off from rain even if the rain has stopped
- Hydrology
- Condensation
- Evapotranspiration doesn't work as well because the Atmosfera is already saturated with water, so there is less space to absorb the sweat in the air
- Wetlands
- Dense Flora drying off after rain

:::
