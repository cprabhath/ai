export const countWords = (str) => {
  return str.split(/\s+/).filter(Boolean).length;
};
