import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 18rem;
`;

export const Title = styled.h1`
  font-size: 10rem;
`;

export const Description = styled.h2`
  font-size: 4rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
