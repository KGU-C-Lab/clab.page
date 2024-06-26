import type { ResponseFile } from './api';

type MemberStatusType = 'ACCEPTED' | 'REJECTED' | 'WAITING';
export type ActivityGroupBoardCategoryType =
  | 'NOTICE'
  | 'WEEKLY_ACTIVITY'
  | 'FEEDBACK'
  | 'ASSIGNMENT'
  | 'SUBMIT';
export type ActivityGroupCategoryType = 'STUDY' | 'PROJECT';
export type ActivityGroupStatusType = 'WAITING' | 'PROGRESSING' | 'END';

export interface ActivityGroupDetailType {
  id: number;
  category: ActivityGroupCategoryType;
  subject: string;
  name: string;
  content: string;
  status: ActivityGroupStatusType;
  imageUrl: string;
  groupMembers: ActivityGroupMemberType[];
  curriculum: string;
  activityGroupBoards: ActivityBoardType[];
  createdAt: string;
  isOwner: boolean;
}

export interface ActivityPhotoItem {
  id: number;
  title: string;
  files: Array<ResponseFile>;
  date: string;
  isPublic: boolean;
}

export interface ActivityGroupMemberType {
  memberId: string;
  memberName: string;
  role: string;
  status: MemberStatusType;
}

export interface ActivityApplyMemberType extends ActivityGroupMemberType {
  applyReason: string;
}

export interface ActivityGroupItem {
  id: number;
  name: string;
  content: string;
  category: ActivityGroupCategoryType;
  subject: string;
  imageUrl: string;
  leaderId: string;
  leaderName: string;
  participantCount: number;
  weeklyActivityCount: number;
  createdAt: string;
}

export interface ActivityRequestType {
  applyReason: string;
  createdAt?: string;
}

/**
 * @deprecated `ResponseFile`으로 대체합니다.
 */
export interface AssignmentFileType {
  fileUrl: string;
  originalFileName: string;
  storagePeriod: number;
  createdAt: string;
}

export interface ActivityBoardType {
  id: number;
  parentId: number;
  category: ActivityGroupBoardCategoryType;
  content: string;
  files: Array<ResponseFile>;
  title?: string;
  dueDateTime?: string;
  createdAt: string;
  feedbacks?: Array<ActivityBoardType>;
}

export interface SubmitBoardType {
  category?: ActivityGroupBoardCategoryType;
  title?: string;
  content?: string;
  fileUrls?: Array<string>;
  dueDateTime?: string;
}

export interface ActivityBoardWithAssignmentType extends ActivityBoardType {
  assignments?: Array<ActivityBoardType>;
}

export interface ActivityGroupBoardParserType extends ActivityGroupDetailType {
  notices: Array<ActivityBoardType>;
  activities: Array<ActivityBoardType>;
  assignments: Array<ActivityBoardType>;
}

export interface ActivityGroupMemberMyType {
  id: number;
  category: ActivityGroupCategoryType;
  imageUrl: string;
  name: string;
  subject: string;
  createdAt: string;
}

export interface ActivityPhotosBody {
  title: string;
  fileUrlList: Array<string>;
  date: string;
}
