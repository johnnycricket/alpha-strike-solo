import { render, screen } from "@testing-library/react";
import Targeting from "./Targeting";

describe("all of targeting", () => {
    describe('loading component', ()=> {
        test('should see page header', () => {
            render(<Targeting/>);
            const targetHeader = screen.getByText('Unit Targeting');
            expect(targetHeader).toBeTruthy();
        })
    })
})