import { type NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';
import { getQrCodeBase64, getSearchValues } from '~/utils/helpers';
import { schema } from '~/utils/schema';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const params = getSearchValues(searchParams);

  const {
    size,
    value,
    ecLevel,
    quietZone,
    bgColor,
    fgColor,
    logoImage,
    logoHeight,
    logoWidth,
    logoOpacity,
    logoRemoveBg,
  } = schema.parse(params);

  const logoX = size / 2 - logoWidth / 2;
  const logoY = size / 2 - logoHeight / 2;
  const data = await getQrCodeBase64({
    value,
    ecLevel,
    quietZone,
    bgColor,
    fgColor,
  });

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${data}`}
          alt=""
          width={size}
          height={size}
        />
        {logoImage && (
          <img
            src={logoImage}
            alt=""
            width={logoWidth + quietZone * 2}
            height={logoHeight + quietZone * 2}
            style={{
              position: 'absolute',
              top: logoY,
              left: logoX,
              opacity: logoOpacity / 100,
              ...(logoRemoveBg && {
                background: bgColor,
                border: `${quietZone * 10}px solid ${bgColor}`,
              }),
            }}
          />
        )}
      </div>
    ),
    {
      width: size,
      height: size,
    }
  );
}
