import React from 'react';
import type { GridItemData } from '../types';
import { Link } from 'react-router-dom';
import './GridItem.css';

const GridItem: React.FC<{ item: GridItemData }> = ({ item }) => {
  // Styles for <Link />
  const linkStyle = { color: item.color ? item.color : 'var(--bg-black)' };

  return (
    <Link
      to={item.link}
      style={linkStyle}
      className={`grid_item ${item.direction === 'responsive' ? 'lg:flex-col lg:items-start items-center flex-row-reverse' : 'flex-col'} ${item.height ? item.height : 'baseHeight'} ${item.bg ? item.bg : ''} ${item.colSpan ? item.colSpan : ''}`}
    >
      <div className={`${item.pattern}`}></div>
      <div className="contents lg:flex flex-col gap-2.5 z-10">
        {/* ICON */}
        {item.icon && (
          <img
            style={{ height: item.iconHeight ?? '26px' }}
            className="grid_img"
            src={item.icon}
            alt="icon"
          />
        )}
        {/* BADGE */}
        {item.badgeText && <p className="grid_badge">{item.badgeText}</p>}
        <p className="grid_text">{item.text}</p>
      </div>
      <p className="grid_label">{item.label}</p>
    </Link>
  );
};

export default GridItem;
