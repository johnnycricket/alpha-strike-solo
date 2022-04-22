import { render, screen } from "@testing-library/react";
import Firing from "./Firing";

describe("all of targeting", () => {
    describe('loading component', ()=> {
        test('should see page header', () => {
            render(<Firing/>);
            const targetHeader = screen.getByText('Unit Firing');
            expect(targetHeader).toBeTruthy();
        })
    })
})