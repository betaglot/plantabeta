<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "Workday"

</script>

# ⭐<span class="labor">Workday</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details &

- Quality decreases at the end of day

- Workday.SubElements
    - WakeUp
    - StagingArrival
    - StagingDeparture
    - Transit
        - Morning Meditation

    - BlockArrival
        - Time
        - Location
    - BlockDeparture
        - Time
        - Duration
        - Run out of Trees
        - Weather
        - Bear
    - Duration
        - Half Day
        - Duration can be shorter or longer given BlockClose or not
            - ShortDay if the BlockClosed early
            - Long Day if the Block must be closed

:::
