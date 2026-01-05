<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "WetSoil"

</script>

# 🟩<span class="ekos">Wet Soil</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details &

- MudSoil, SloppySoil, BlackMuckSoil
- (WetSoil != WetLand)
- "Flood with water" instead of "Fill with water". "Fill" is a ReservedWord. ToReduceConfusion

:::
