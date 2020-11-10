const tagColors = new Map();
tagColors.set("News", "#C5E0D8")
tagColors.set("Tech", "#DDBEA8")

const defaultTagColor = "#D1D7DC";

export function getTagColor(tag) {
  const result = tagColors.get(tag);
  if (result) {
    return result;
  } else {
    return defaultTagColor;
  }
}