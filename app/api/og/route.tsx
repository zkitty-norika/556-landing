import { ImageResponse } from 'next/server';
import Image from 'next/image';
// App router includes @vercel/og.
import heroImage01 from './hero-image-01.jpg'
 
export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
      <>
        <div
          style={{
            fontSize: 50,
            color: 'black',
            background: 'white',
            width: '100%',
            height: '100%',
            padding: '50px 200px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          🔫 Lubrication for illiquid pools🔫
        </div>
      </>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}