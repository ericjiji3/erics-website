import React, { useState } from "react";
import "./Tooltip.css";
import E from "./E";
import html from "./pics/logos/html.png";
function TooltipContent(props){
    let ref;
    let skills = props.content.split(' ');
    if(skills.at(-1).substr(0,5) == "https"){
      ref = skills.pop();
    }
    skills.shift();
    console.log(skills);
    function getWidth(width){
        let barWidth = width + "%";
        return barWidth;
    }
  return (
    <div>
      {skills.map((item, index) => (
          <div className="progress-item d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-colum justify-content-center"><span className="d-flex align-items-center logo-description">{item.substr(0, item.indexOf('-')).toUpperCase()}</span><img className="logo" src={`./pics/logos/${item.substr(0, item.indexOf('-'))}.png`}/></div>
          <div className="d-block bar-length">
              <div className="progress progress-striped active">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: getWidth(item.substr(item.indexOf('-')+ 1))}}></div>
              </div>
          </div>
        </div>
        ))}
        {ref && window.innerWidth < 850 ? <a className="mobile-link btn btn-primary" href={ref} target="_blank">VIEW</a> : null}
    </div>
  )
  };

export default TooltipContent;
