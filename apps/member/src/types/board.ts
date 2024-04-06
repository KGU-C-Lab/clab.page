import type { CommunityCategoryType } from './community';

export interface BoardType {
  id: number;
  category: CommunityCategoryType;
  title: string;
}

export interface BoardItem extends BoardType {
  writerId: number;
  content: string;
  commentCount: number;
  writerName: string;
  createdAt: string;
}
