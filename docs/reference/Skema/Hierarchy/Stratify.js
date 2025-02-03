import * as d3 from "d3";

const paths = [
    "axes.js",
    "channel.js",
    "context.js",
    "legends.js",
    "legends/ramp.js",
    "marks/density.js",
    "marks/dot.js",
    "marks/frame.js",
    "scales/diverging.js",
    "scales/index.js",
    "scales/ordinal.js",
    "stats.js",
    "style.js",
    "transforms/basic.js",
    "transforms/bin.js",
    "transforms/centroid.js",
    "warnings.js",
  ];

const root = d3.stratify().path((d) => d)(paths);

console.log(root)