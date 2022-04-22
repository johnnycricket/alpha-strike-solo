import MovementContainer from "./MovementContainer";
import { LightMediumMovement } from "../../types/LightMediumMovment";
import { fireEvent, getRoles, logRoles, render, screen } from '@testing-library/react';
import { debug } from "console";


describe('All of MovementContainer', () => {
    describe('Component loading.', () => {
        test('component loads', () => {
            render(<MovementContainer moveType={LightMediumMovement} moveTitle={"Small & Medium Unit Movement"}/>);
            const rollButton = screen.getByRole('button');
            expect(rollButton).toHaveTextContent('Move');
        })
    })

    describe('Rolling', () => {
        test('should roll and show an instruction', () => {
            render(<MovementContainer moveType={LightMediumMovement} moveTitle={"Small & Medium Unit Movement"}/>);
            const moveBtn = screen.getByText('Move');

            fireEvent.click(moveBtn);
            const instruction = screen.getByTestId('instruction-p');
            expect(instruction.innerHTML).not.toBeNull();
        });
    })
});