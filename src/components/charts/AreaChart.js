import React, { useRef, useEffect, useState } from 'react';
import './AreaChart.css';
import { select, curveCardinal, axisBottom, axisLeft, scaleLinear, scaleTime, area, max, min, selection, timeFormat } from 'd3';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      // console.log(entries);
      entries.forEach(entry => {
        setDimensions(entry.contentRect);
      });
    });

    resizeObserver.observe(observeTarget);

    return () => {
      resizeObserver.unobserve(observeTarget);
    }
  }, [ref])

  return dimensions;
};

selection.prototype.getFront = function() {
  return this.each(function() {
      this.parentNode.appendChild(this);
  });
};

const AreaChart = ({data, header, color1, color2, id}) => { 
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    // console.log(dimensions);
    if (!dimensions) return;

    const svg = select(svgRef.current);  

    const minDate = min(data, d => new Date(d.date));
    const maxDate = max(data, d => new Date(d.date));
    const maxNumber = max(data, d => d.number);

    const xScale = scaleTime().domain([minDate, maxDate]).range([0, dimensions.width]);
    const yScale = scaleLinear().domain([0, maxNumber + 1]).range([dimensions.height, 0]);

    const xAxis = axisBottom(xScale).ticks(9).tickFormat(timeFormat(`%b'%y`));
    svg.select(".x-axis")
      .style("transform", `translate(7px, ${dimensions.height - 25}px)`)
      .call(xAxis).attr('stroke-width', 0);
      
    const yAxis = axisLeft(yScale).ticks(4);
    svg.select(".y-axis")
      .style("transform", "translate(25px, -13px)")
      .call(yAxis).attr('stroke-width', 0);

    const myArea = area()
      .x((d) => xScale(new Date(d.date)))
      .y0(dimensions.height)
      .y1((d) => yScale(d.number))
      .curve(curveCardinal);

    svg
      .append("linearGradient")
      .attr("id", "gradient-"+id)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", yScale(0))
      .attr("x2", 0).attr("y2", yScale(dimensions.height / 18))
      .selectAll("stop")
        .data([
          {offset: "0%", color: color1},
          {offset: "70%", color: color2},
          {offset: "100%", color: color2}
        ])
      .enter().append("stop")
        .attr("offset", function(d) { return d.offset; })
        .attr("stop-color", function(d) { return d.color; })
        .attr("stop-opacity", "1");

    var text = svg.selectAll("text.chart-header");
    text
      .enter()
      .append("text")
        .attr("class", "chart-header")
        .attr("text-anchor", "middle")
        .text(header)
      .merge(text)
        .attr("x", dimensions.width / 2)
        .attr("y", 0);

    svg.append("text")
      .attr("x", dimensions.width / 2)
      .attr("y", 0)
      .attr("class", "chart-header")
      .text(header);

    svg
      .selectAll(".area")
      .data([data]).join("path")
        .attr("class", "area")
        .attr("d", myArea)
        .attr('fill', `url(#gradient-${id})`);

    svg.select(".x-axis").getFront();
    svg.select(".y-axis").getFront();

  }, [dimensions, data]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} className="outer-div">
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default AreaChart;