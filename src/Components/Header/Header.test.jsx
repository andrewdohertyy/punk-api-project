import Header from './header';
import {getAllByRole, getByAltText, getByRole, render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

it ("should render a paragraph of info on the header", () => {
    //arrange
    render(<Header />);
    //act
    const output = screen.getByText('The biggest range of the latest craft beer releases from BrewDog and breweries we know and love from around the world. All ready and waiting to be discovered.')
    //assert
    expect(output).toBeInTheDocument();
})

it("should contain an image with a alt tag", () => {
    render(<Header />);
  
    const imageAlt = screen.getByAltText(/brewdog beer/i)
    
    expect(imageAlt).toBeInTheDocument();
})