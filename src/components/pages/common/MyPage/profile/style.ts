import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
align-items: center;
gap: 10px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  > img {
    width: 70px;
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 50%;
`