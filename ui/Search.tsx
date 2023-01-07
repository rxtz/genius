import { Input, InputProps } from '@geist-ui/core';
import { Search as S } from '@geist-ui/icons';

const ideas = [
  // 'ANDO CON EL ALCALDE',
  // 'YO ESTOY LOCO QUE TÚ SEA MI BIZCOCHO',
  '',
];

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default function Search(props: InputProps) {
  return (
    <Input
      {...props}
      icon={<S />}
      placeholder={ideas[random(0, ideas.length)]}
      className="mb-4"
      scale={1.5}
      width="100%"
      autoFocus
      clearable
    />
  );
}
