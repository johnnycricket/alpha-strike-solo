import { fireEvent, render, screen } from "@testing-library/react";
import Movement from "./Movement";

describe("all of movement", () => {
    describe('loading component', () => {
        test('should see page header', () => {
            render(<Movement/>);
            const movementHeader = screen.getByText('What kind of unit is moving?');
            expect(movementHeader).toBeTruthy();
        })
        test('should have four buttons for asking what kind of movement', () => {
            render(<Movement/>);
            const movementButtons = screen.queryAllByRole('button');
            expect(movementButtons.length).toEqual(4);
        });
    })
    describe('showing the diff movements', () => {
        describe('SM', () => {
            let smMdBtn: any;
            beforeEach(() => {
                // eslint-disable-next-line testing-library/no-render-in-setup
                render(<Movement/>);
                smMdBtn = screen.getByText('Small - Medium Unit');
            })
            test('should show small medium when small medium button', () => {
                fireEvent.click(smMdBtn);
                const close = screen.getByText('X');
                const smallMediumComponent = screen.getByText('Move');
                expect(close).toBeTruthy();
                expect(smallMediumComponent).toBeTruthy();
            });
            test('clicking X should show default questions again', () => {
                fireEvent.click(smMdBtn);
                let close = screen.getByText('X');
                fireEvent.click(close);
                const otherButton = screen.getByText('Melee Unit');
                expect(otherButton).toBeTruthy();
            })
        })
    });
});
