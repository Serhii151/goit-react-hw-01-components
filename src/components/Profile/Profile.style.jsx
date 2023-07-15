import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  max-width: 100%;
  padding-top: 30px;
  width: 360px;
  box-shadow: 1px 1px 1px #babecc;
  background-color: ${props => props.theme.colors.background};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;

  border-radius: 50%;
  box-shadow: -1px -1px 1px #3d3b3b, 1px 1px 1px #3d3b3b;

`;

export const Info = styled.p`
  color: ${props => props.theme.colors.text};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const Name = styled(Info)`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: 500;
`;

export const Tag = styled(Info)`
  color: ${props => props.theme.colors.primary};
`;

export const Location = styled(Info)`
  color: ${props => props.theme.colors.primary};
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #d4d4d4;
  padding: ${props => props.theme.space[4]}px;
  width: 100%;
`;

export const StatsItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;

`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.bold};
`;