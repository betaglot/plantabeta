<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "Terrain"

</script>

# 🟩<span class="ekos">Terrain</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠

- Qualitative not Quantitative

- (🟩Terrain != 🔻Orientation)
    - Terrain has no direction
        - WalkUpSlope, DownSlope, AcrossSlope, all along the same (Terrain=Contains(Slope))

- <https://gq.mines.gouv.qc.ca/documentation_en/geoscience-map-symbols-and-abbreviations/quaternary-geology/surficial-landforms/>

- [Topography refers to the physical features of an area, while terrain refers to a stretch of land - with reference to its physical features as adjectives.](https://hinative.com/questions/17497955)
    - Valleyed
    - Prokline
        - SkreeSlope
        - SandSlope
            - AlluvialFanSlope
            - AlluvialFan is beyond the scope of PlantaBeta. Geomorphology is too deep.
    - Flat
    - Overhanging
        - Differentiate(OverhangRoute, OverhangWall)
            - Route is Labor
            - Wall is Ekon

:::
