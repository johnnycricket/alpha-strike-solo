import { render, screen } from "@testing-library/react";
import DieResult from "./dieResult";

describe('all of die result', () => {
    describe("if a result is a d12", () => {
        test('should display a result', () => {
            render(<DieResult result={4} isD12={true} />);
            let actual = screen.getByText("4");
            expect(actual.innerHTML).toStrictEqual("4")
        });

        test('should display a d12 svg', () => {
            render(<DieResult result={4} isD12={true} />);
            let actual = screen.getByTestId('dtwelve-svg');
            expect(actual).toBeTruthy();
        })
    });
    
    describe("if a result is a d6", () => {
        test('should display a result', () => {
            render(<DieResult result={4} isD12={false} />);
            let actual = screen.getByText("4");
            expect(actual.innerHTML).toStrictEqual("4")
        });

        test('should display a d6 svg', () => {
            render(<DieResult result={4} isD12={false} />);
            let actual = screen.getByTestId('twodsix-svg');
            expect(actual).toBeTruthy();
        })
    });

})