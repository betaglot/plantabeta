<template>
    <v-chip :class=FaktorName>
        {{ FaktorName }} {{ FaktorName }}
    </v-chip>
</template>

<script setup>
const props = defineProps({
    FaktorName: String
})

</script>

<style>
.labor {
  font-weight: 900;
  color:  #FFCC00;
  
}

.soma {
  font-weight: 900;
  color: #569cd6;
}

.ekos {
  font-weight: 900;
  color: #6a9955;
}

.via {
  font-weight: 900;
  color: #f44747;
}

.motor {
  font-weight: 900;
  color: #bf6a34;

}

.anima {
  font-weight: 900;
  color: #c586c0;
}
</style>