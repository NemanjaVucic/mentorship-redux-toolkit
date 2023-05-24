import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8, Avatar9 } from '.';

export interface AvatarImages {
  id: number;
  imgPath: string;
  isSelected: boolean;
}

export const avatarImages: AvatarImages[] = [
  { id: 1, imgPath: Avatar1, isSelected: true },
  { id: 2, imgPath: Avatar2, isSelected: false },
  { id: 3, imgPath: Avatar3, isSelected: false },
  { id: 4, imgPath: Avatar4, isSelected: false },
  { id: 5, imgPath: Avatar5, isSelected: false },
  { id: 6, imgPath: Avatar6, isSelected: false },
  { id: 7, imgPath: Avatar7, isSelected: false },
  { id: 8, imgPath: Avatar8, isSelected: false },
  { id: 9, imgPath: Avatar9, isSelected: false },
];
