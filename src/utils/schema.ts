import { z } from 'zod';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100000;

export const schema = z.object({
  value: z.string(),
  size: z.coerce.number().min(MIN_NUMBER).max(MAX_NUMBER).default(600),
  ecLevel: z.enum(['L', 'M', 'Q', 'H']).default('M'),
  quietZone: z.coerce.number().min(MIN_NUMBER).max(MAX_NUMBER).default(1),
  bgColor: z.string().min(4).max(9).regex(/^#/).default('#fff'),
  fgColor: z.string().min(4).max(9).regex(/^#/).default('#000'),
  logoImage: z.string().url().nullish(),
  logoWidth: z.coerce.number().min(MIN_NUMBER).max(MAX_NUMBER).default(300),
  logoHeight: z.coerce.number().min(MIN_NUMBER).max(MAX_NUMBER).default(300),
  logoOpacity: z.coerce.number().min(0).max(100).default(100),
  logoRemoveBg: z.coerce.boolean().default(false),
});

export type Schema = z.infer<typeof schema>;
