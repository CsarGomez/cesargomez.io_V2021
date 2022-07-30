import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='px-[1.25rem] max-w-[500px] mx-auto md:max-w-[800px] md:mx-auto'>
      {children}
    </div>
  );
}
