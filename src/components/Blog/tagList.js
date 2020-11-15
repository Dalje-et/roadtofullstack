import React from 'react';
import { getTagColor } from '../../utils/tags';

import './tagList.less';

export default function TagList({ tags }) {
  function getTagStyles(tag) {
    return { backgroundColor: getTagColor(tag) };
  }

  return (
    <div className="tagList">
      {tags && tags.split(',').map((tag) => {
        return <span key={tag} className="tag" style={getTagStyles(tag)}>{tag}</span>;
      })}
    </div>
  );
}
