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
        const actual = screen.getByText('Dice Type');
        expect(actual).toBeTruthy();
    })
})