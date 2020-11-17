import * as d3 from 'd3';
import { _3d } from 'd3-3d';

export default function init3(data){
    const svg = d3.select('svg').append('g');
    // const circle = svg.selectAll('circle').data([32, 57, 293]);
    // circle.enter()
    //     .append("circle")
    //     .attr("cy", 60)
    //     .attr("cx", function(d, i) { return i * 100 + 30; })
    //     .attr("r", function(d) { return Math.sqrt(d); })
    //     .style('fill', 'steelblue');

    // circle.exit().remove();
    svg.selectAll("circle")
    .data([32, 57, 112, 293])
    .enter()
    .append("circle")
    .attr("cy", 60)
    .attr("cx", function(d, i) { return i * 100 + 30; })
    .attr("r", function(d) { return Math.sqrt(d); })
    .style('fill', 'steelblue');
}
