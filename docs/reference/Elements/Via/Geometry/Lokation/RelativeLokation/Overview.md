<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "RelativeLokation"

</script>

# 🔻<span class="via">Relative Lokation</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details &

- Apex, Nadir == Highest, Lowest
- Triangulation
- Between
- Middle
    [Point.Middle] == "Midpoint" == (VIA.Fraction + Point)
- End
- [Middle,Point] = "Midpoint"
- Use (Superior,Inferior)InsteadOf(Above,Below) ToReduceConfusion with Direktions

:::