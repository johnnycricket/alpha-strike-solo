import React from 'react';
import DTwelveContainer from "./DTwelveContainer";
import { fireEvent, render, screen } from "@testing-library/react";

describe('All of DTwelveContainer', () => {
    it('should load the component', () => {
        render(<DTwelveContainer damageDice="variable"/>);
        const actual = screen.getByText('Number of Dice');
        expect(actual).toBeTruthy();
    })

    it('should display a result when damage dice is singular when Roll button is clicked.', () => {
        render(<DTwelveContainer damageDice="nope"/>);
        const rollButton = screen.getByRole('button');
        fireEvent.click(rollButton);

        const actual = screen.getByTestId('dtwelve-svg');
        expect(actual).toBeTruthy();
    })

    it('should display mulitple results when damage dice is variable when Roll button is clicked.', () => {
        render(<DTwelveContainer damageDice="variable"/>);
        const rollButton = screen.getByRole('button');
        const numberOfDiceInput = screen.getByTestId('test-numberofdice');
        fireEvent.input(numberOfDiceInput, {target: {value: '2'}});
        fireEvent.click(rollButton);

        const actual = screen.getAllByTestId('dtwelve-svg');
        console.log(actual);
        expect(actual.length).toBe(2);
    })
})