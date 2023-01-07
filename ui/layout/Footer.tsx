import { Logo, Liga } from 'ui';

const links = [
  {
    url: 'https://docs.genius.com',
    name: 'API',
  },
];

export default function Footer() {
  return (
    <footer className="py-12 p text-sm bg-basalt">
      <div className="max-sm:block bar">
        <div className="bar max-sm:mb-4">
          <Logo />

          <nav className="font-medium">
            {links.map((a) => (
              <Liga
                href={a.url}
                className="ml-6 !text-neutral-400"
                key={a.name}
              >
                {a.name}
              </Liga>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
