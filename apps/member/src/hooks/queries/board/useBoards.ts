import { useEffect } from 'react';

import {
  useQueryClient,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';

import { getBoards } from '@api/board';
import { BOARD_QUERY_KEY } from '@constants/key';

import { WithPaginationParams } from '@type/api';

/**
 * 커뮤니티 게시글 목록을 조회합니다.
 * 무한 스크롤을 지원합니다.
 * 카테고리별로 조회하려면 `useCategoryBoards`를 사용하세요.
 */
export const useBoards = ({ size = 6 }: WithPaginationParams = {}) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: [BOARD_QUERY_KEY.COLLECTIONS],
      });
    };
  }, [queryClient]);

  return useSuspenseInfiniteQuery({
    initialPageParam: 0,
    queryKey: [BOARD_QUERY_KEY.COLLECTION({ size })],
    queryFn: ({ pageParam }) => getBoards(pageParam, size),
    select: (data) => data.pages.flatMap((page) => page.items),
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.currentPage + 1 : null;
    },
  });
};
