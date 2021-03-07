import { render , screen , fireEvent } from '@testing-library/react'
import Button from './index'

test('renders Button', () => {

    render(<Button primary={true} icon={true} label={'Request Demo'} />);
    
    const element = screen.getByTitle('button');
    expect(element).toBeInTheDocument();
});
