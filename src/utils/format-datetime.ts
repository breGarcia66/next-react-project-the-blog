import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDatetime(rawDate: string): string {
  return format(new Date(rawDate), "dd/MM/yyyy 'ás' HH'h'mm", {
    locale: ptBR,
  });
}
