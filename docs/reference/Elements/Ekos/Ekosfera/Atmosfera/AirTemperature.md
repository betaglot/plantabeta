<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "AirTemperature"

</script>

# 🟩<span class="ekos">Air Temperature</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details &

- Raining and Cold
- AirTemperature can be difficult to be objective about, because of Wind Chill
    - How to distinguish the experience of SOMA.Temperature and Atmosfera.Temperature?

:::
