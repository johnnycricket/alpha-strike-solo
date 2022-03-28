import SmallMediumMovement from "./SmallMediumMovement";
import { TableInterface } from "../../types/TableInterface";
import { LightMediumMovement } from "../../types/LightMediumMovment";
import { render, screen } from '@testing-library/react';


describe('All of SmallMediumMovement', () => {
    describe('Component loading.', () => {
        test('component loads', () => {
            render(<SmallMediumMovement/>);
            const rollButton = screen.getByRole('button');
            expect(rollButton).toHaveTextContent('Move');
        })
    })
});