import { NavLink } from 'react-router-dom';
import { theme } from '../../theme';
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  gap: ${theme.space.x3}px;
  border: 3px solid ${theme.color.dodgerblue};
  border-radius: 10px;
  padding: ${theme.space.x5}px;
  margin-top: ${theme.space.x5}px;
`;
export const NavLinkStyled = styled(NavLink)`
  font-size: ${theme.font.size.medium}px;
  font-weight: ${theme.font.weight.bold};
  text-decoration: none;
  color: ${theme.color.dodgerblue};
  transition: 0.25s ease-in-out;

  &:hover,
  &.active {
    transform: scale(1.1);
    color: ${theme.color.darkred};
  }

  &:last-child {
    margin-left: auto;
  }
`;
