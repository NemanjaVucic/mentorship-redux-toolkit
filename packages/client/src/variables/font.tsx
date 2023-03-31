// Option 1 (as const)
export const font = {
  size: {
    base: '16px',
    medium: '20px',
    large: '24px',
  },
  weight: {
    regular: 300,
    bold: 700,
  },
} as const;

// Option 2 (Object.freeze({}))
// export const font = Object.freeze({
//   size: Object.freeze({
//     base: '16px',
//     medium: '20px',
//     large: '24px',
//   }),
//   weight: Object.freeze({
//     regular: 300,
//     bold: 700,
//   }),
// });
