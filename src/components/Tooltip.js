import React, { useState } from "react";
import "./Tooltip.css";
import ToolTipContent from "./TooltipContent";
const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
      setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  const toggleTip = () => {
    if(!active){
      setActive(true);
    }else{
      setActive(false);
    }
  }
  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={window.innerWidth < 850 ? ()=> {return false} : showTip}
      onMouseLeave={window.innerWidth < 850 ? ()=> {return false} : hideTip}
      onClick={window.innerWidth < 850 ? toggleTip : ()=> {return false}}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {/* Content */}
          {props.content.includes('progress') ? (<ToolTipContent content={props.content}/>) : (props.content)}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
