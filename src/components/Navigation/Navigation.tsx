import { NavigationContainer, NavLinkStyled } from '../navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/create">Create</NavLinkStyled>
      <NavLinkStyled to="/update">Update</NavLinkStyled>
      <NavLinkStyled to="/about">About</NavLinkStyled>
    </NavigationContainer>
  );
};
