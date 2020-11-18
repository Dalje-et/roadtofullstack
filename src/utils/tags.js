const tagColors = new Map();
tagColors.set('News', '#8447FF');
tagColors.set('Tech', '#ED6A5E');

const defaultTagColor = '#348AA7';

export function getTagColor(tag) {
  const result = tagColors.get(tag);
  if (result) {
    return result;
  } else {
    return defaultTagColor;
  }
}
