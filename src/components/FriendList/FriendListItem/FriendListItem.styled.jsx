import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 4px;
  max-width: 100%;
  width: 360px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: ${props => props.theme.colors.background};
`;

export const Status = styled.span`
  display: block;
  margin-left: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 5px;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

`;


export const Name = styled.p`
  font-size: 18px;
  font-weight: 400;
`;