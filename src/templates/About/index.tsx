import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from "./styles"

import LinkWrapper from "@/components/LinkWrapper"

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>Minhas Viagens</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Hic adipisci voluptate veritatis harum,
        amet a nesciunt odit praesentium deserunt saepe!
        Nesciunt quam veritatis at quo accusantium dolorum architecto cumque officia?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
