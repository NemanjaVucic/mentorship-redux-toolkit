import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StorybookHostReactProps {}

const StyledStorybookHostReact = styled.div`
  color: pink;
`;

export function StorybookHostReact(props: StorybookHostReactProps) {
  return (
    <StyledStorybookHostReact>
      <h1>Welcome to StorybookHostReact!</h1>
    </StyledStorybookHostReact>
  );
}

export default StorybookHostReact;
