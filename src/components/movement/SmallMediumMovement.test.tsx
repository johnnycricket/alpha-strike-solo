import SmallMediumMovement from "./SmallMediumMovement";
import { fireEvent, render, screen } from '@testing-library/react';


describe('All of SmallMediumMovement', () => {
    describe('Component loading.', () => {
        test('component loads', () => {
            render(<SmallMediumMovement/>);
            const rollButton = screen.getByRole('button');
            expect(rollButton).toHaveTextContent('Move');
        })
    })

    describe('Rolling', () => {
        test('should roll and show an instruction', () => {
            render(<SmallMediumMovement/>);
            const rollButton = screen.getByRole('button');
            fireEvent.click(rollButton);
            const instruction = screen.getByTestId('instruction-p');
            expect(instruction.innerHTML).not.toBeNull();
        });
    })
});