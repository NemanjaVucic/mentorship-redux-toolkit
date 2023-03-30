import { NavLink } from 'react-router-dom';
import { color, font, space } from '../../variables';
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  gap: ${space.x3};
  border: 3px solid ${color.dodgerblue};
  border-radius: 10px;
  padding: ${space.x5};
  margin-top: ${space.x5};
`;
export const NavLinkStyled = styled(NavLink)`
  font-size: ${font.size.medium};
  font-weight: ${font.weight.bold};
  text-decoration: none;
  color: ${color.dodgerblue};
  transition: 0.25s ease-in-out;

  &:hover,
  &.active {
    transform: scale(1.1);
    color: ${color.darkred};
  }

  &:last-child {
    margin-left: auto;
  }
`;
