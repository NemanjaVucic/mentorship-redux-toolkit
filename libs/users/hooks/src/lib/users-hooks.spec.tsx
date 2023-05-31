import { render } from '@testing-library/react';

import UsersHooks from './users-hooks';

describe('UsersHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UsersHooks />);
    expect(baseElement).toBeTruthy();
  });
});
