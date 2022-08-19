import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Targeting from "./Targeting";

describe("all of targeting", () => {
    describe('loading component', ()=> {
        test('should see page header', () => {
            render(
                <MemoryRouter>
                    <Targeting/>
                </MemoryRouter>
            );
            const targetHeader = screen.getByText('Unit Targeting')
            expect(targetHeader).toBeTruthy();
        })
    })
})