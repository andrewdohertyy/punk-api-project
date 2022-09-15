import Search from './search';
import {getAllByRole, getByAltText, getByPlaceholderText, getByRole, getByText, render, screen} from "@testing-library/react"
// import userEvent from '@testing-library/user-event';

it ("should show a search box", () => {
    render (<Search />);

    const searchtext = screen.getByPlaceholderText(/Search here.../i)
   
    expect(searchtext).toBeInTheDocument();
})