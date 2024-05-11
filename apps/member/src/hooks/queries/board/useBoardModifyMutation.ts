import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchBoards } from '@api/board';
import { QUERY_KEY } from '@constants/key';
import { API_ERROR_MESSAGE, ERROR_MESSAGE } from '@constants/message';
import useToast from '@hooks/common/useToast';

/**
 * 게시글을 수정합니다.
 */
export const useBoardModifyMutation = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const boardModifyMutation = useMutation({
    mutationFn: patchBoards,
    onSuccess: ({ success, data: category, errorMessage }, { id }) => {
      if (success) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.BOARDS, category, id],
        });
        toast({
          state: 'success',
          message: '해당 게시글이 수정되었어요.',
        });
      } else if (errorMessage) {
        toast({
          state: 'error',
          message: API_ERROR_MESSAGE[errorMessage],
        });
      }
    },
    onError: () => {
      toast({
        state: 'error',
        message: ERROR_MESSAGE.NETWORK,
      });
    },
  });

  return { boardModifyMutate: boardModifyMutation.mutate };
};