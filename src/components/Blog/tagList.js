import React from 'react';

import './tagList.less';

const tagColors = new Map();
tagColors.set('Development', '#8447FF');
tagColors.set('Project', '#ED6A5E');

const defaultTagColor = '#348AA7';

function getTagColor(tag) {
  const result = tagColors.get(tag);
  if (result) {
    return result;
  } else {
    return defaultTagColor;
  }
}

function getTagStyles(tag) {
  return { backgroundColor: getTagColor(tag) };
}

export default function TagList({ tags }) {
  return (
    <div className="tagList">
      {tags && tags.split(',').map((tag) => {
        return <span key={tag} className="tag" style={getTagStyles(tag)}>{tag}</span>;
      })}
    </div>
  );
}
