import React from 'react';
import { GrNext } from 'react-icons/gr';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string | string[];
  path?: string | string[];
  children?: React.ReactNode;
}

const Header = ({ title, path, children }: HeaderProps) => {
  const titles = Array.isArray(title) ? title : [title];
  const paths = Array.isArray(path) ? path : [path];

  return (
    <div className="flex items-center justify-between rounded-lg border bg-white px-2 py-4">
      <div className="flex items-center text-xl font-bold">
        {titles.map((name, index) => (
          <React.Fragment key={name + index}>
            <Link
              to={paths[index] ?? ''}
              className="rounded-lg px-2 transition-colors hover:bg-gray-100"
            >
              {name}
            </Link>
            {index !== titles.length - 1 && (
              <GrNext className="text-gray-500" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center gap-4 pr-2">{children}</div>
    </div>
  );
};

export default Header;
