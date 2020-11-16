const tagColors = new Map();
tagColors.set('News', '#8447FF');
tagColors.set('Tech', '#373D20');

const defaultTagColor = '#85756E';

export function getTagColor(tag) {
  const result = tagColors.get(tag);
  if (result) {
    return result;
  } else {
    return defaultTagColor;
  }
}
