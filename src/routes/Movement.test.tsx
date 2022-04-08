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
                const smallMediumComponent = screen.getByText('Small & Medium Unit Movement');
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
        describe('HVAS', () => {
            let hvBtn: any;
            beforeEach(() => {
                // eslint-disable-next-line testing-library/no-render-in-setup
                render(<Movement/>);
                hvBtn = screen.getByText('Heavy - Assault Unit');
            })
            test('should show heavy and assault when heavy and asssult unit button', () => {
                fireEvent.click(hvBtn);
                const close = screen.getByText('X');
                const smallMediumComponent = screen.getByText('Heavy & Assault Unit Movement');
                expect(close).toBeTruthy();
                expect(smallMediumComponent).toBeTruthy();
            });
            test('clicking X should show default questions again', () => {
                fireEvent.click(hvBtn);
                let close = screen.getByText('X');
                fireEvent.click(close);
                const otherButton = screen.getByText('Melee Unit');
                expect(otherButton).toBeTruthy();
            })
        })
        describe('Missile Boat - Sniper Unit', () => {
            let msSn: any;
            beforeEach(() => {
                // eslint-disable-next-line testing-library/no-render-in-setup
                render(<Movement/>);
                msSn = screen.getByText('Missile Boat - Sniper Unit');
            })
            test('should show missile sniper when that unit button pressed', () => {
                fireEvent.click(msSn);
                const close = screen.getByText('X');
                const missileSniperComponent = screen.getByText('Missile & Sniper Unit Movement');
                expect(close).toBeTruthy();
                expect(missileSniperComponent).toBeTruthy();
            });
            test('clicking X should show default questions again', () => {
                fireEvent.click(msSn);
                let close = screen.getByText('X');
                fireEvent.click(close);
                const otherButton = screen.getByText('Melee Unit');
                expect(otherButton).toBeTruthy();
            })
        })
        describe('Melee unit', () => {
            let melee: any;
            beforeEach(() => {
                // eslint-disable-next-line testing-library/no-render-in-setup
                render(<Movement/>);
                melee = screen.getByText('Melee Unit');
            })
            test('should show melee unit button when pressed', () => {
                fireEvent.click(melee);
                const close = screen.getByText('X');
                const meleeComponent = screen.getByText('Melee Unit Movement');
                expect(close).toBeTruthy();
                expect(meleeComponent).toBeTruthy();
            });
            test('clicking X should show default questions again', () => {
                fireEvent.click(melee);
                let close = screen.getByText('X');
                fireEvent.click(close);
                const otherButton = screen.getByText('Melee Unit');
                expect(otherButton).toBeTruthy();
            })
        })
    });
});
