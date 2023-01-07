'use client';

import { resources } from 'lib/genius';
import { Collapse, Note } from '@geist-ui/core';

const docs = [
  {
    title: 'Uso',
    description: 'PARA SU CONSUMO',
    list: [
      `/api/{${resources.toString().replace(/,/g, ' | ')}}/[id]`,
      '/api/lyrics/[query]',
      '/api/search?q=[query]',
    ],
    note: 'Debe adquirir su propio token',
  },
  {
    title: 'Ingredientes',
    description: 'LA RECETA',
    list: ['Next.js', 'SWR', 'genius-lyrics-api', 'Geist', 'Tailwind CSS'],
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl">
      <Collapse.Group accordion={false}>
        <title>Docs</title>

        {docs.map((d, i) => (
          <Collapse
            title={d.title}
            subtitle={d.description}
            initialVisible={i === 0}
            key={i}
          >
            <ul>
              {d.list.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            {d.note && <Note label={false}>{d.note}</Note>}
          </Collapse>
        ))}
      </Collapse.Group>
    </div>
  );
}
