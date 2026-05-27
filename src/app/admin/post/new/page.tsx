import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { BugIcon } from 'lucide-react';

export default async function AdminNewPost() {
  return (
    <div className='py-16 flex flex-col gap-4'>
      <InputText labelText='nome' type='text' placeholder='Digite seu nome' />
      <InputText labelText='sobrenome' type='text' placeholder='Digite seu sobrenome' />

      <InputText disabled labelText='nome' type='text' placeholder='Digite seu nome' />
      <InputText disabled labelText='sobrenome' type='text' placeholder='Digite seu sobrenome' />

      <InputText readOnly labelText='nome' type='text' defaultValue='Digite seu nome' />
      <InputText readOnly labelText='sobrenome' type='text' defaultValue='Digite seu sobrenome' />
    </div>
  );
}
