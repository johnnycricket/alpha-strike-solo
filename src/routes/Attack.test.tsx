import Attack from './Attack';
import { render, screen } from '@testing-library/react';

describe('All of attack', () => {
    test('should load the page', () => {
        render(<Attack/>);
        const actual = screen.getByText('Attack');
        expect(actual).toBeTruthy();
    })

    test('should ask d12\'s or d6\'s', () => {
        render(<Attack/>);
        const actual = screen.getByText('Choose Dice Type');
        expect(actual).toBeTruthy();
    })

    test('should be able to see radios for variable or simple dice', () => {
        render(<Attack/>);
        const actual = screen.getByText('Variable Damage Dice');
        expect(actual).toBeTruthy();
    })
})