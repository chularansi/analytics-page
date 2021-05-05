import React, { useEffect, useRef } from "react";
import { select, pie, arc, scaleOrdinal } from 'd3';
import './PieChart.css';

const PieChart = (props) => {
  const ref = useRef(null);
  const createPie = pie()
  .value(d => d.value);
  // .sort(d => d.category);
  
  const createArc = arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);

  const colors = scaleOrdinal().range(["#f5db68", "#e04046"]);

  useEffect(() => {
    const data = createPie(props.pieData);
    const group = select(ref.current);
    const groupWithData = group.selectAll("g.arc").data(data);

    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData
      .enter()
      .append("g")
      .attr("class", "arc");

    const path = groupWithUpdate
      .append("path")
      .merge(groupWithData.select("path.arc"));

    path
      .attr("class", "arc")
      .attr("d", createArc)
      .attr("fill", (d, i) => colors(d.data.value));

      group.append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("class", "pie-mid-text")
      .text(648);
  }, [props.pieData]);

  return (
    <div id="pie-container">
      <svg id="pie-svg">
        <g
          ref={ref}
          transform={`translate(${props.outerRadius} ${props.outerRadius})`}
        />
      </svg>
    </div>
  );
};

export default PieChart;
