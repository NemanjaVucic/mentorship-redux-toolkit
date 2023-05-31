import { RoutePath } from '@mentorship/users/shared';

import { NavLinkStyled, NavigationContainer } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavLinkStyled to={RoutePath.home}>Home</NavLinkStyled>
      <NavLinkStyled to={RoutePath.createUser}>Create</NavLinkStyled>
      <NavLinkStyled to={RoutePath.updateUser}>Update</NavLinkStyled>
      <NavLinkStyled to={RoutePath.about}>About</NavLinkStyled>
    </NavigationContainer>
  );
};
