import React, { useState } from "react";
import "./Tooltip.css";
import ToolTipContent from "./TooltipContent";
const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 0);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
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
