import { FC } from 'react';
import '../styles/sidebar.scss';

interface Props {}

export const SideBar: FC<Props> = ({ children }) => {
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>{children}</div>
    </nav>
  );
};
