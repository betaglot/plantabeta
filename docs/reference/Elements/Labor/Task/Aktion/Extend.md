<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "Extend"

</script>

# ⭐<span class="labor">Extend</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details &

- Bend
- Extension
- MultiJoint
    - Arm
        - ([Extend|Arm] = ([Extend|Elbow] + [Extend|Wrist]))
    - Leg
        - ([Extend|Leg] = ([Extend|Knee] + [Extend|Ankle] + [Extend|Hip]))
    - Finger

- Extend at Joint
    - Ankle
    - Hip
    - Knee
    - Wrist
    - Spine

:::