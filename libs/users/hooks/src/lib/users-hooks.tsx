import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UsersHooksProps {}

const StyledUsersHooks = styled.div`
  color: pink;
`;

export function UsersHooks(props: UsersHooksProps) {
  return (
    <StyledUsersHooks>
      <h1>Welcome to UsersHooks!</h1>
    </StyledUsersHooks>
  );
}

export default UsersHooks;
