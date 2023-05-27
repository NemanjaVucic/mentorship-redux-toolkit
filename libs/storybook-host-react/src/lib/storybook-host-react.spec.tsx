import { render } from '@testing-library/react';

import StorybookHostReact from './storybook-host-react';

describe('StorybookHostReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookHostReact />);
    expect(baseElement).toBeTruthy();
  });
});
