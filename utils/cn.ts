import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const scale = (name: string, steps: number[]) => steps.map((s) => `${name}-${s}`);
const fullScale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const themeColors = [
  ...scale('primary', fullScale),
  ...scale('accent', fullScale),
  ...scale('mindaro', [50, 100, 200, 300, 400, 500]),
  ...scale('shuttle', fullScale),
  ...scale('neutral', [100, 200, 400, 700, 800, 950]),
  ...scale('violet', [50, 600, 950]),
  'vulcan-950',
  'surface-1',
  'surface-2',
];

const themeFonts = ['satoshi', 'poppins', 'clash', 'inter'];

const themeTextSizes = [
  'heading-l',
  'heading-m',
  'heading-s',
  'heading-2xs',
  'heading-xs',
  'display-s',
  'display-xs',
  'body-l',
  'body-m',
  'body-s',
  'body-xs',
  'label-xl',
  'label-l',
  'label-m',
  'label-s',
  'label-xs',
];

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'bg-color': [{ bg: themeColors }],
      'text-color': [{ text: themeColors }],
      'border-color': [{ border: themeColors }],
      'font-family': [{ font: themeFonts }],
      'font-size': [{ text: themeTextSizes }],
      shadow: [{ shadow: ['photo'] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
