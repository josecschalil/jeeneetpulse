import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter();
  const pathnames = router.asPath.split('/').filter(x => x);

  return (
    <nav>
      <ul style={{ listStyleType: 'none', display: 'flex' }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={to} style={{ marginLeft: '10px' }}>
              <Link href={to}>{value}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
