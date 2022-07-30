import heart from '../public/static//icons/love.svg';
import Image from 'next/image';

export default function Footer() {
  const social: { src: string; alt: string; href: string }[] = [
    {
      src: '/static/icons/github.svg',
      alt: 'github icon',
      href: 'https://github.com/CsarGomez',
    },
    {
      src: '/static/icons/codepen.svg',
      alt: 'codepen icon',
      href: 'https://codepen.io/cgope',
    },
    {
      src: '/static/icons/instagram.svg',
      alt: 'instagram icon',
      href: 'https://www.instagram.com/cgope/',
    },
    {
      src: '/static/icons/twitter.svg',
      alt: 'twitter icon',
      href: 'https://twitter.com/cgope',
    },
    {
      src: '/static/icons/linkedin.svg',
      alt: 'linkedin icon',
      href: 'https://www.linkedin.com/in/cgope/',
    },
  ];

  return (
    <footer className='flex flex-col items-center mt-[50px] pb-[30px] md:mt-[100px]'>
      <div className='flex gap-2 mb-[10px]'>
        {social.map((item) => (
          <figure key={item.alt}>
            <a href={item.href} target='_blank' rel='noreferrer'>
              <Image src={item.src} alt={item.alt} width={15} height={15} />
            </a>
          </figure>
        ))}
      </div>

      <p className='text-boulder'>
        Made with
        <Image src={heart} alt='heart icon' width={15} />
      </p>
      <p className='text-center text-alto dark:text-mine'>
        build with Next.js, Tailwind.css, MDX and Vercel
      </p>
    </footer>
  );
}
