<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "Block"

</script>

# ⭐<span class="labor">Block</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details &

- each feature contains a Ministry of Forests and Range (MoFR) FEATURE_CLASS_SKEY (number) column that further defines the type of that feature. The layer contains cutblock boundaries for the following feature classes: Forest Licence Cut Block (555), Licence to Cut Cut Block (616), Timber Licence Cut Block (810), Timber Sale Licence Major Cut Block (817), Timber Sale Licence Minor CB Non Replaceable (820), Tree Farm Licence Cut Block (833), Wood Lot Licence Cut Block (863), Community Forest Cut Block (2402), and Timber Sale Licence Minor CB Replaceable (2417). Each cut block has a life cycle status that is either PENDING - the cut block has been submitted as a new cut block or an amendment, but is not yet approved or rejected, ACTIVE - the cut block is approved and activities may be taking place on the cut block, or RETIRED - all activities, with respect to the harvesting authority, have been completed for the cut block
    - <https://open.canada.ca/data/en/dataset/dfb8b498-fa4b-4286-b3ec-58db88aca1cf>

- WalkInBlock
- WalkOut

- BETOMs
    - [Block.FillBlock]
    - [Block.Road]
    - [Block.WalkIn]
        - Walk through Block to a piece which isn't bounded by road
        - ATVaccess only
        - PieceCache
        - Carry trees in
        - Trees will be brought in by ATV
    - [Block.WalkOut]
    - [Block.ATVaccess]
    - [Block.Overflow]

- Definition
    - The space of land that your crew is planting in.

- Usually Composed of Contiguous Subareas

- "Down the Road"

- Dispersed

- Block.Anatomy
    - BlockAccess
    - Road
    - Boundary
    - Entry
    - Treeline
    - [Flora|Density]
    - Riparian
    - WTP
    - Landing
    - ATVroad

- Block.Attributes
    - Block.Lokation
        - Altitude
        - Access
    - Area
    - Morfos
    - Topography
    - Water features
    - Lokation
    - Altitude

:::
