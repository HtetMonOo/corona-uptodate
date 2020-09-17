import React from 'react'
import { tooltipContentBodyStyle, tooltipContentTitleStyle } from './styles';
import * as d3Format from 'd3-format';
import {Tooltip} from '@devexpress/dx-react-chart-material-ui';

const getMonth = monthNo => {
    const months = [ "Jan", "Feb", "Mar", "Ari", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec" ];
    return months[monthNo-1];
  }
const TooltipContent = (props) => {
  const { targetItem, text, ...restProps } = props;

  return (
    <>
    {
      targetItem && data && 
    <div>
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentTitleStyle}
          text={data[targetItem.point][targetItem.series]}
        />
      </div>
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentBodyStyle}
          text={targetItem.series+" cases"}
        />
      </div>
      
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentBodyStyle}
          text={"on "+getMonth(data[targetItem.point].date.getMonth())+"-"+data[targetItem.point].date.getDate()}
        />
      </div>
    </div>
}</>
  );
};

export default TooltipContent;