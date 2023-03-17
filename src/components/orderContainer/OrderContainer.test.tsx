import React from 'react';
import MovementContainer from "./OrderContainer";
import { LightMediumMovement } from "../../types/LightMediumMovment";
import { fireEvent, render, screen } from '@testing-library/react';


describe('All of MovementContainer', () => {
    describe('Component loading.', () => {
        test('component loads', () => {
            render(<MovementContainer orderType={LightMediumMovement} orderTitle={"Small & Medium Unit Movement"}/>);
            const rollButton = screen.getByRole('button');
            expect(rollButton).toHaveTextContent('Move');
        })
    })

    describe('Rolling', () => {
        test('should roll and show an instruction', () => {
            render(<MovementContainer orderType={LightMediumMovement} orderTitle={"Small & Medium Unit Movement"}/>);
            const moveBtn = screen.getByText('Move');

            fireEvent.click(moveBtn);
            const instruction = screen.getByTestId('instruction-p');
            expect(instruction.innerHTML).not.toBeNull();
        });
    })
});