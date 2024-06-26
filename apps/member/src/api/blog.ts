import { createPagination } from '@clab/utils';

import { END_POINT } from '@constants/api';

import type { BaseResponse, ResponsePagination } from '@type/api';
import type { BlogPost } from '@type/blog';

import { server } from './server';

/**
 * 블로그 포스트 조회
 */
export const getBlog = async (page: number, size: number) => {
  const params = { page, size };
  const { data } = await server.get<ResponsePagination<BlogPost>>({
    url: createPagination(END_POINT.BLOG, params),
  });

  return data;
};
/**
 * 블로그 포스트 상세 조회
 */
export const getBlogDetail = async (id: number) => {
  const { data } = await server.get<BaseResponse<BlogPost>>({
    url: END_POINT.BLOG_DETAIL(id),
  });

  return data;
};
