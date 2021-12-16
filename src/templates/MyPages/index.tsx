import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from "./styles"

import LinkWrapper from "@/components/LinkWrapper"

export type PageProps = {
  heading: string
  body: string
}

const MyPagesTemplate = ({heading, body}: PageProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>{ heading }</S.Heading>
    <S.Body>
    <div
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </S.Body>
  </S.Content>
)

export default MyPagesTemplate
