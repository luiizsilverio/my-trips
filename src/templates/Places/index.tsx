import LinkWrapper from "@/components/LinkWrapper"
import { CloseOutline } from "@styled-icons/evaicons-outline"
import Image from 'next/image'
import { useRouter } from "next/router"

import * as S from './styles'

type TLocation = {
  latitude: number
  longitude: number
}

type TDescription = {
  html: string
}

type TGallery = {
  url: string
  height: number
  width: number
}

type PlaceProps = {
  id: string
  slug: string
  name: string
  location: TLocation
  visited: boolean
  description : TDescription
  gallery: TGallery[]
}

export type PlaceTemplateProps = {
   place: PlaceProps
}

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Voltar para o mapa" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html }}
          />

          <S.Gallery>
            {
              place.gallery.map((image, index) => (
                // <img key={index} src={ image.url } alt={ place.name } />
                <Image
                  key={index}
                  width={900} height={600}
                  src={ image.url }
                  alt={ place.name }
                  objectFit="contain" // "contain"
                  priority={true}
                />
              ))
            }
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
