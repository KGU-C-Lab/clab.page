import { BookItem } from '@type/book';

import BookCard from '../BookCard/BookCard';

interface LibraryBookListProps {
  data: Array<BookItem>;
}

const LibraryBookList = ({ data }: LibraryBookListProps) => {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map(({ id, ...rest }) => (
        <BookCard key={id} id={id} {...rest} />
      ))}
    </div>
  );
};
export default LibraryBookList;
