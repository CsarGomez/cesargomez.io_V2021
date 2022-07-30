import Head from 'next/head';

export default function Uses() {
  return (
    <div className='px-[1.25rem]'>
      <Head>
        <title>Uses - Cesar Gomez</title>
        <meta name='description' content='Front-end developer uses page' />
      </Head>

      <h2 className='my-[20px] text-3xl text-black font-normal md:text-5xl dark:text-white'>
        Uses
      </h2>

      <section className='leading-none mt-[30px]'>
        <h3 className='text-2xl font-bold text-aztec dark:text-concrete'>
          Desktop
        </h3>
        <div className='mt-[10px] px-[20px]'>
          <ul>
            <li>
              Macbook Pro 13 &#8221; {'(Mid 2012 - 10GB RAM - 258GB SSD).'}
            </li>
            <li>Compaq monitor s1908a.</li>
            <li>Logitech MX Master 2S mouse.</li>
            <li>Keychrone K6</li>
            <li>TECU electronic standard desk</li>
            <li>Ergonomus Osaka chair</li>
          </ul>
        </div>
      </section>

      <section className='leading-none mt-[30px]'>
        <h3 className='text-2xl font-bold'>Editor and terminal</h3>
        <div className='mt-[10px] px-[20px]'>
          <ul>
            <li>
              <span className='font-bold'>Editor:</span> VSCode, extensions
              <a
                href='https://gist.github.com/CsarGomez/3ddfd032cb345bf8a6a1b878983fe82b'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                here.
              </a>
            </li>
            <li>
              <span className='font-bold'>Theme:</span> Nord theme.
            </li>
            <li>
              <span className='font-bold'>Terminal:</span> Hyper -zsh.
            </li>
          </ul>
        </div>
      </section>

      <section className='leading-none mt-[30px]'>
        <h3 className='text-2xl font-bold'>Music</h3>
        <div className='mt-[10px] px-[20px]'>
          <ul>
            <li>Schecter Banshee Extreme 6 FR.</li>
            <li>Epiphone Special model.</li>
            <li>Fender Acoustic.</li>
          </ul>
        </div>
      </section>

      <section className='leading-none mt-[30px]'>
        <h3 className='text-2xl font-bold'>Others</h3>
        <div className='mt-[10px] px-[20px]'>
          <ul>
            <li>Apple iPhone XR</li>
            <li>Apple Airpods 3 gen.</li>
            <li>PS4.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
