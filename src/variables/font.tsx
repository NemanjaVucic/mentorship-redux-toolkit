export type Font = Readonly<{
  size: Readonly<{
    base: number;
    medium: number;
    large: number;
  }>;
  weight: Readonly<{
    regular: number;
    bold: number;
  }>;
}>;

export const font: Font = {
  size: {
    base: 16,
    medium: 20,
    large: 24,
  },
  weight: {
    regular: 300,
    bold: 700,
  },
};
