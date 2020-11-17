import * as d3 from 'd3';
import { axisBottom } from 'd3';
import { _3d } from 'd3-3d';

const origin = [480, 300];
const j = 10, scale = 20;
const key = function(d){ return d.id; }
const startAngle = Math.PI/4;

const grid3d = _3d()
    .shape('GRID', 20)
    .origin(origin)
    .rotateY( startAngle)
    .rotateX(-startAngle)
    .scale(scale);

const yLine3D = _3d()
    .shape('LINE_STRIP')
    .origin(origin)
    .rotateY( startAngle)
    .rotateX(-startAngle)
    .scale(scale);

function processData(data, svg){

    /* ----------- GRID ----------- */

    var xGrid = svg.selectAll('path.grid').data(data[0], key);

    xGrid
        .enter()
        .append('path')
        .attr('class', '_3d grid')
        .merge(xGrid)
        .attr('stroke', 'black')
        .attr('stroke-width', 0.3)
        .attr('fill', function(d){ return d.ccw ? 'lightgrey' : '#717171'; })
        .attr('fill-opacity', 0.9)
        .attr('d', grid3d.draw);

    xGrid.exit().remove();

    // var yLine3D = svg.selectAll('path.yScale').data(data[2]);

    //     yLine3D
    //         .enter()
    //         .append('path')
    //         .attr('class', '_3d yScale')
    //         .merge(yLine3D)
    //         .attr('stroke', 'red')
    //         .attr('stroke-width', .5)
    //         .attr('d', yLine3D.draw);

    //         yLine3D.exit().remove();

    // d3.selectAll('._3d').sort(_3d().sort);
}

export default function init(){
    // eslint-disable-next-line
    const svg = d3.select('svg').append('g');
    const xData = [];
    const aXis = [];
    const bXis = [];
    const cXis = [];
    for(var z = -j; z < j; z++){
        for(var x = -j; x < j; x++){
            xData.push([x, x + z, z]);
        }
    }

    d3.range(-1, 11, 1).forEach(function(d){ bXis.push([-j+10, -d, -j + 10]); });

    const data = [
        grid3d(xData),
        grid3d(aXis),
        yLine3D([bXis]),
        grid3d(cXis),
    ]

    processData(data, svg);
}