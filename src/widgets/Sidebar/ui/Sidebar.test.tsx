import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
describe('Sidebar component', () => {
  test('renders the component', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('sidebar collapsing', () => {
    componentRender(<Sidebar />);
    const sidebarBtn = screen.getByTestId('sidebar-btn');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(sidebarBtn);
    fireEvent.click(sidebarBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
