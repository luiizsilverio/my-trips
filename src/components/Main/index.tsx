import * as S from "./styles"

function Main() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src="/img/icon-192.png" alt="React Avançado" />
        <S.Title>React Avançado</S.Title>
      </S.Header>
      <S.Description>ReactJS, NextJS e Typescript e Styled-Components</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor na frente do computador"
      />
      <a href="#">Link</a>
    </S.Wrapper>
  )
}

export default Main
