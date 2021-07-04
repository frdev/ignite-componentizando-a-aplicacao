import { FC } from 'react';
import '../styles/content.scss';

interface Props {
  title: string;
}

export const Content: FC<Props> = ({ title, children }) => {
  return (
    <div className='container'>
      <header>
        <span className='category'>
          Categoria:<span> {title}</span>
        </span>
      </header>

      <main>{children}</main>
    </div>
  );
};
