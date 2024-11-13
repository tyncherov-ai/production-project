import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import Sidebar from './Sidebar';
describe('Sidebar component', () => {
  test('renders the component', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('sidebar collapsing', () => {
    renderWithTranslation(<Sidebar />);
    const sidebarBtn = screen.getByTestId('sidebar-btn');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(sidebarBtn);
    fireEvent.click(sidebarBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
