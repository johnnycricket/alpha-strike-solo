import { fireEvent, render, screen } from "@testing-library/react";
import Firing from "./Firing";

describe("all of targeting", () => {
    describe('loading component', ()=> {
        test('should see page header', () => {
            render(<Firing/>);
            const targetHeader = screen.getByText('Firing');
            expect(targetHeader).toBeTruthy();
        })
        test('should have two buttons for asking what kind of firing/strike is happening', () => {
            render(<Firing/>);
            const firingButtons = screen.queryAllByRole('button');
            expect(firingButtons.length).toEqual(2);
        })
    })

    describe('show the different firings', () => {
        describe('F', () => {
            let fBtn: any;
            beforeEach(() => {
                // eslint-disable-next-line testing-library/no-render-in-setup
                render(<Firing/>);
                fBtn = screen.getByText('Ranged Attack');
            });
            test('should show ranged firing', () => {
                fireEvent.click(fBtn);
                const close = screen.getByTestId('close-icon');
                const rangedFiringComponent = screen.getByText('Unit Range Firing');
                expect(close).toBeTruthy();
                expect(rangedFiringComponent).toBeTruthy();
            });
            test('clicking the close icon should show the default buttons again', () => {
                fireEvent.click(fBtn);
                let close = screen.getByTestId('close-icon');
                fireEvent.click(close);
                const otherButton = screen.getByText('Melee Attack');
                expect(otherButton).toBeTruthy();
            })
        });
        describe('M', () => {
            let mBtn: any;
            beforeEach(() => {
                // eslint-disable-next-line testing-library/no-render-in-setup
                render(<Firing/>);
                mBtn = screen.getByText('Melee Attack');
            });
            test('should show melee firing', () => {
                fireEvent.click(mBtn);
                const close = screen.getByTestId('close-icon');
                const meleeFiringComponent = screen.getByText('Unit Melee Strike');
                expect(close).toBeTruthy();
                expect(meleeFiringComponent).toBeTruthy();
            });
            test('clicking the close icon should show the default buttons again', () => {
                fireEvent.click(mBtn);
                let close = screen.getByTestId('close-icon');
                fireEvent.click(close);
                const otherButton = screen.getByText('Ranged Attack');
                expect(otherButton).toBeTruthy();
            })
        });
    })
})