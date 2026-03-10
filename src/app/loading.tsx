import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

export default function LoadingRoot() {
  return <SpinLoader className={clsx('min-h-screen')} />;
}
