import { FC, ReactNode } from 'react';
import { Link, To, useMatch, useResolvedPath } from 'react-router-dom';

interface LayoutListItemProps {
  children: ReactNode;
  to: To;
}

export const LayoutListItem: FC<LayoutListItemProps> = ({ children, to }) => {
  const { pathname } = useResolvedPath(to);
  const match = useMatch({ path: pathname, end: true });

  return <li className={match ? 'active' : ''}>
    <Link to={to}>{children}</Link>
  </li>
};
