import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postReturnBook } from '@api/book';
import {
  BOOK_LOAN_RECORD_QUERY_KEY,
  BOOK_QUERY_KEY,
  MY_BOOK_QUERY_KEY,
} from '@constants/key';
import { ERROR_MESSAGE } from '@constants/message';
import useToast from '@hooks/common/useToast';

/**
 * 대출한 도서를 반납합니다.
 */
export function useBookLoanReturnMutation() {
  const queryClient = useQueryClient();
  const toast = useToast();

  const bookReturnMutation = useMutation({
    mutationFn: postReturnBook,
    onSuccess: (data, { bookId, borrowerId }) => {
      if (data) {
        queryClient.invalidateQueries({
          queryKey: BOOK_QUERY_KEY.DETAIL(bookId),
        });
        queryClient.invalidateQueries({
          queryKey: BOOK_LOAN_RECORD_QUERY_KEY.BOOK(bookId),
        });
        queryClient.invalidateQueries({
          queryKey: BOOK_LOAN_RECORD_QUERY_KEY.BORROWER(borrowerId),
        });
        queryClient.invalidateQueries({
          queryKey: MY_BOOK_QUERY_KEY.BOOKS(),
        });
        toast({
          state: 'success',
          message: '도서 대여가 반납되었어요.',
        });
      } else {
        toast({
          state: 'error',
          message: ERROR_MESSAGE.NETWORK,
        });
      }
    },
  });

  return { bookReturnMutate: bookReturnMutation.mutate };
}
