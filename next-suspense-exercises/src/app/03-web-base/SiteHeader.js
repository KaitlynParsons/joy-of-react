import React, { Suspense } from 'react';
import Link from 'next/link';

import { getNavLinks } from '@/helpers/web-base-helpers';

const NavLinks = async () => {
  let navLinks = await getNavLinks();

  // Only show the first 4 links in the header.
  navLinks = navLinks.slice(0, 4);
  return (
    <ol className='header-nav-links'>
      {navLinks.map(({ slug, label, href, type }) => (
        <li key={slug}>
          <Link href={href} className={`header-nav-link ${type}`}>
            {label}
          </Link>
        </li>
      ))}
    </ol>
  );
};

async function SiteHeader() {


  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        <Suspense>
          <NavLinks />
        </Suspense>
      </nav>
    </header>
  );
}

export default SiteHeader;
