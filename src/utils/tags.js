const tagColors = new Map();
tagColors.set('Self Development', '#8447FF');
tagColors.set('News', '#ED6A5E');

const defaultTagColor = '#348AA7';

export function getTagColor(tag) {
  const result = tagColors.get(tag);
  if (result) {
    return result;
  } else {
    return defaultTagColor;
  }
}
