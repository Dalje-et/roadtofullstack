import React from 'react';

import './tagList.less';

const tagColors = new Map();
tagColors.set('Advice', '#8447FF');
tagColors.set('Project', '#ED6A5E');
tagColors.set('Automation', '#5e6fed');

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
        return <div key={tag} className="tag" style={getTagStyles(tag)}>{tag}</div>;
      })}
    </div>
  );
}
