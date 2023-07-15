import styled from 'styled-components';
import { getRandomHexColor } from '../Utility/getRandomHexColor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  max-width: 100%;
  width: 360px;
  background-color: #fff;
`;

export const Title = styled.h2`
  padding: ${props => props.theme.space[4]}px;

  text-shadow: 1px 1px 1px #fff;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size:  font-size: ${props => props.theme.fontSizes.l};

  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: ${props => props.theme.space[3]}px;

  width: 100%;
  height: 100%;

  text-shadow: 0 0 1px #000;


  :first-child {
    border-bottom-left-radius: 0.5rem;
  }

  :last-child {
    border-bottom-right-radius: 0.5rem;
  }

  background-color: ${props => getRandomHexColor(props.index)}
`;

export const Label = styled.span`
  font-size: 0.8rem;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: #fff;
`;