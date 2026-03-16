import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatRelativeDate(rawDate: string): string {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, { locale: ptBR, addSuffix: true });
}
