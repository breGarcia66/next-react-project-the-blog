import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { BugIcon } from 'lucide-react';

export default async function AdminNewPost() {
  return (
    <div className='py-16 flex flex-col gap-4'>
      <InputText type='text' placeholder='Digite seu nome' />
      <InputText type='text' placeholder='Digite seu sobrenome' />
    </div>
  );
}
