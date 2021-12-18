import dynamic from 'next/dynamic'
import { DefaultSeo, NextSeo } from 'next-seo'

import { MapProps } from '@/components/Map';
import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from '@/components/LinkWrapper';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const places = [
  {
    id: '1',
    name: 'Londres',
    slug: 'londres',
    location: {
      latitude: 52,
      longitude: 0
    }
  },
  {
    id: '2',
    name: 'Campinas',
    slug: 'campinas',
    location: {
      latitude: -25,
      longitude: -50
    }
  }
]

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description='Um projeto simples que exibe um mapa com os lugares que eu visitei ou desejo visitar'
        canonical='https://my-trips.luiizsilverio.com.br'
        openGraph={{
          url: 'https://my-trips.luiizsilverio.com.br',
          images: [
            {
              url: 'https://my-trips.luiizsilverio.com.br/img/cover.png',
              width: 1084,
              height: 610,
              alt: 'My Trips'
            }
          ]
        }}
      />
      <LinkWrapper href='/about'>
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map places={ places } />
    </>
  )
}
