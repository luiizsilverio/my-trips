import dynamic from 'next/dynamic'
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

export default function Home() {
  return (
    <>
      <LinkWrapper href='/about'>
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
