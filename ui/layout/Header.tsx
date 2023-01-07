import { useState } from 'react';
import { Logo } from 'ui';
import Link from 'next/link';
import { Toggle, Drawer } from '@geist-ui/core';

const pages = [{ slug: '/docs', page: 'DOCS' }];

export default function Header() {
  const [drawer, setDrawer] = useState(false);

  return (
    <header className="lg:sticky z-50 top-0 p bg-carbon font-medium">
      <div className="bar py-2 border-b-2 border-b-genius hover:border-opacity-50">
        <Logo />

        <nav>
          {pages.map((p) => (
            <Link href={p.slug} className="mr-6 text-sm" key={p.slug}>
              {p.page}
            </Link>
          ))}
        </nav>

        <Toggle
          type="success"
          scale={1.75}
          checked={drawer}
          onChange={(e) => setDrawer(e.target.checked)}
        />
      </div>

      <Drawer
        visible={drawer}
        onClose={() => setDrawer(false)}
        placement="bottom"
      ></Drawer>
    </header>
  );
}
