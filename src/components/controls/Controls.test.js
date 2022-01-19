import { render, screen } from '@testing-library/react';
import Controls from './controls';

test('should render', async () => {
  const container = render(<Controls />);
  await screen.findAllByPlaceholderText('Search Pokemon');
  expect(container).toMatchSnapshot();
});
