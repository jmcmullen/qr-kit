import QRCode from 'qrcode';
import { type Schema } from './schema';

export function getSearchValues(
  searchParams: URLSearchParams
): Record<string, any> {
  return Array.from(searchParams.keys()).reduce((record, key) => {
    const value = searchParams.get(key);
    return { ...record, [key]: value };
  }, {} as Record<string, any>);
}

export async function getQrCodeBase64(
  config: Pick<
    Schema,
    'value' | 'ecLevel' | 'quietZone' | 'bgColor' | 'fgColor'
  >
) {
  const qrData = await QRCode.toString(config.value, {
    type: 'svg',
    errorCorrectionLevel: config.ecLevel,
    margin: config.quietZone,
    color: {
      light: config.bgColor,
      dark: config.fgColor,
    },
  });

  return Buffer.from(qrData).toString('base64');
}
