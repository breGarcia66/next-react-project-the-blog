'use client';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type RelativeDateProps = {
  date: string;
  className?: string;
}

export function RelativeDate({ date, className }: RelativeDateProps) {
  return (
    <span className={className}>
      {formatDistanceToNow(new Date(date), {
        locale: ptBR,
        addSuffix: true,
      })}
    </span>
  );
}
