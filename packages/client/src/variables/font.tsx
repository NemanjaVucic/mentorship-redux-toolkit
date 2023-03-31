// export type Font = Readonly<{
//   size: Readonly<{
//     base: string;
//     medium: string;
//     large: string;
//   }>;
//   weight: Readonly<{
//     regular: number;
//     bold: number;
//   }>;
// }>;

// export const Font = {
//   size: {
//     base: '16px',
//     medium: '20px',
//     large: '24px',
//   },
//   weight: {
//     regular: 300,
//     bold: 700,
//   },
// } as const;

export const Font = Object.freeze({
  size: Object.freeze({
    base: '16px',
    medium: '20px',
    large: '24px',
  }),
  weight: Object.freeze({
    regular: 300,
    bold: 700,
  }),
});
