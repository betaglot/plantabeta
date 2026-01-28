<template>
  <v-container class="my-24">
    <div ref="chartContainer"></div>

  </v-container>

</template>

<script setup>


import * as d3 from 'd3';
import { ref, onMounted } from 'vue';
import dataJSON from '/data/Rete/Faktors-Parent-Child.json'

import CardElementInfo from '/vue/ElementPage/Card-ElementInfo.vue'




const data = dataJSON

const chartContainer = ref(null);

onMounted(() => {
  // D3 code goes here, safe in the knowledge it runs in the browser.

  const width = 1000;
  const height = width;
  const cx = width * 0.5; // adjust as needed to fit
  const cy = height * 0.5; // adjust as needed to fit
  const radius = 250; // the distance from the center to the outermost concentric ring

  // Create a radial tree layout. The layout’s first dimension (x)
  // is the angle, while the second (y) is the radius.
  const tree = d3.tree()
    .size([2 * Math.PI, radius])
    .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

  // Sort the tree and apply the layout.
  const root = tree(d3.hierarchy(data));

  // Creates the SVG container.
  // const svg = d3.create("svg")
  const svg = d3.select(chartContainer.value)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-cx, -cy, width, height])
    .attr("style", "font: 30px sans-serif;");

  // Append links.
  svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "gray")
    .attr("stroke-opacity", 1)
    .attr("stroke-width", 8)
    .selectAll()
    .data(root.links())
    .join("path")
    .attr("d", d3.linkRadial()
      .angle(d => d.x)
      .radius(d => d.y));

  // Append nodes.
  svg.append("g")
    .selectAll()
    .data(root.descendants())
    .join("circle")
    .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
    .attr("fill", "gray")
    .attr("r", 8);

  // Append labels.
  svg.append("g")
    .attr("stroke-linejoin", "round")
    .attr("stroke-width", 12)
    .selectAll()
    .data(root.descendants())
    .join("text")
    .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0) rotate(${d.x >= Math.PI ? 180 : 0})`)
    .attr("dy", "0.31em")
    .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
    .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
    .attr("paint-order", "stroke")
    .attr("stroke", "black")
    .attr("fill", d => d.data.textColor)
    .text(d => d.data.name);

  svg.append("CardElementInfo")

  return svg.node();
});
</script>

<style scoped>
.treeCard {
  max-height: 100px;
  max-width: 100px;
}
</style>
