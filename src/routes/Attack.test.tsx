import Attack from './Attack';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('All of attack', () => {
    test('should load the page', () => {
        render(
            <MemoryRouter>
                <Attack/>
            </MemoryRouter>
        );
        const actual = screen.getByText('Attack');
        expect(actual).toBeTruthy();
    })

    test('should ask d12\'s or d6\'s', () => {
        render(
            <MemoryRouter>
                <Attack/>
            </MemoryRouter>
        );
        const actual = screen.getByText('Choose Dice Type');
        expect(actual).toBeTruthy();
    })

    test('should be able to see radios for variable or simple dice', () => {
        render(
            <MemoryRouter>
                <Attack/>
            </MemoryRouter>
        );
        const actual = screen.getByText('Variable Damage Dice');
        expect(actual).toBeTruthy();
    })

    test('should show dtwelve container', () => {
        render(
            <MemoryRouter>
                <Attack/>
            </MemoryRouter>
        );
        const d12button = screen.getByText('D12');
        fireEvent.click(d12button);

        const actual = screen.getByText('Roll');
        expect(actual).toBeTruthy();
    })

    test('should show dsix container', () => {
        render(            
            <MemoryRouter>
                <Attack/>
            </MemoryRouter>
        );
        const d6button = screen.getByText('2 D6');
        fireEvent.click(d6button);

        const actual = screen.getByText('Roll');
        expect(actual).toBeTruthy();
    })
})
