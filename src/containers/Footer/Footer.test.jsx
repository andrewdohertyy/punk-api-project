import Footer from './footer';
import {getAllByRole, getByAltText, getByRole, render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

it ("should have text saying to subscribe to a newsletter", () => {
    render(<Footer />)

    const displayText = screen.getByText("SIGN UP TO OUR NEWSLETTER FOR THE LATEST BEER, NEWS, EVENTS AND MORE")

    expect(displayText).toBeInTheDocument();
})

it ("should have a button saying sign up", () => {
    render(<Footer />)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();
})