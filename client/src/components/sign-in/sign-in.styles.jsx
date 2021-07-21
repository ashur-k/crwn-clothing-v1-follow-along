import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
  width: 100%;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  @media screen and (max-width: 800px) {
    width: 100%;    
    }
`;