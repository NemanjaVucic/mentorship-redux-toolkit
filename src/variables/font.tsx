export type Font = Readonly<{
  size: Readonly<{
    base: string;
    medium: string;
    large: string;
  }>;
  weight: Readonly<{
    regular: number;
    bold: number;
  }>;
}>;

export const Font: Font = Object.freeze({
  size: {
    base: '16px',
    medium: '20px',
    large: '24px',
  },
  weight: {
    regular: 300,
    bold: 700,
  },
});
