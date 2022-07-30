const Picture = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className='rounded-md my-[20px]'>
      <img src={src} alt={alt} className='rounded-md mx-auto' />
    </div>
  );
};

const ExternalLink = ({ href, text }: { href: string; text: string }) => {
  console.log(href);
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='font-taviraj text-radical cursor-pointer'
    >
      {text}
    </a>
  );
};

const MDXComponenets = {
  Picture,
  ExternalLink,
};

export default MDXComponenets;
