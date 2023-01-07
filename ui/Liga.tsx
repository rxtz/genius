import { AnchorHTMLAttributes } from 'react';

export default function Liga(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      href={props.href}
      className={`text-genius ${props.className}`}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}
