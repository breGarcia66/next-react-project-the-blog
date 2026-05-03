import { logColor } from './log-colors';

export async function asyncDelay(
  milliseconds: number = 0,
  verbose: boolean = false,
) {
  if (milliseconds <= 0) return;

  if (verbose) {
    logColor(`Delay de ${milliseconds / 1000}s`);
  }

  await new Promise(resolve => setTimeout(resolve, milliseconds));
}
