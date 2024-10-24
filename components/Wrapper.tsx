import clsx from 'clsx';
import { ReactNode } from 'react';

const Wrapper: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => {
  return (
    <div className={clsx('px-10 sm:px-10 md:px-10 lg:px-20 xl:px-40', className)}>{children}</div>
  );
};

export default Wrapper;
