import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col mt-[10px] h-full'>
      <div className='flex flex-col md:justify-center items-center md:flex-row gap-3'>
        <div className='mt-[10px] md:mt-0 md:w-[50%]'>
          <p className='text-center'>
            This page does not exist, but here&sbquo;s my little girl called
            Sharon
          </p>
          <Link href='/'>
            <a className='backToHome'>Back to home</a>
          </Link>
        </div>
        <div className='w-[300px] h-[auto] rounded-[5px] shadow-lg'>
          <img
            src={'/static/sharon.jpeg'}
            alt='Dog picture'
            className='rounded-[5px] shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}
