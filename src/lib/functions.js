/* eslint-disable import/prefer-default-export */
export const hexToRgba = (hex, alpha) => {
  const hexToRgb = () => {
    const regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const newHex = hex.replace(regex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null;
  };

  const { r, g, b } = hexToRgb();
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
