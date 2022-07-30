import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { NavItems } from '../lib/types';

const NavItems = ({ href, text }: NavItems) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink href={href}>
      <a
        className={`nav__link ${
          isActive
            ? 'text-aztec font-bold dark:text-concrete'
            : 'text-gray font-normal dark:text-gray'
        }`}
      >
        {text}
      </a>
    </NextLink>
  );
};

export default NavItems;
