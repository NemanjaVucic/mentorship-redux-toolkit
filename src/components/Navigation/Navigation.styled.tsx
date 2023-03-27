import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 10px;
  border: 3px solid #1b60aa;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;
export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #1b60aa;
  transition: 0.25s ease-in-out;

  &:hover,
  &.active {
    transform: scale(1.1);
    color: #9c1c2b;
  }

  &:last-child {
    margin-left: auto;
  }
`;
