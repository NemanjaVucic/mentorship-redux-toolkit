import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedHooksProps {}

const StyledSharedHooks = styled.div`
  color: pink;
`;

export function SharedHooks(props: SharedHooksProps) {
  return (
    <StyledSharedHooks>
      <h1>Welcome to SharedHooks!</h1>
    </StyledSharedHooks>
  );
}

export default SharedHooks;
