import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  max-width: 100%;
  width: 100%;
  border-radius: ${props => props.theme.radii.medium};
  
`;

export const Thead = styled.thead`
  border-radius: ${props => props.theme.radii.medium};
  background-color: #05bbd0;
  color: ${props => props.theme.colors.white};
  font-family: monospace;
  text-transform: uppercase;
`;

export const Tr = styled.tr`

`;

export const ExtendedTr = styled(Tr)`
  background-color: ${props =>
    props.idx % 2 === 0 ? props.theme.colors.lines : 'transparent'};
`;


export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: ${props => props.theme.space[4]}px;
  text-align: left;

  :first-child {
    border-top-left-radius: ${props => props.theme.radii.medium};
  }

  :last-child {
    border-top-right-radius: ${props => props.theme.radii.medium};
  }
`;

export const Tb = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;

export const Td = styled.td`
  padding-left: ${props => props.theme.space[4]}px;
`;


export const Type = styled(Td)`
  text-transform: capitalize;
`;
