import Dashboard from "./Dashboard"
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

describe('All of Dashboard', () => {
    test('dashboard loads', () => {
        render(<Dashboard/>, {wrapper: MemoryRouter});
        const sections = screen.getAllByRole('heading');
        const expectedLength = sections.length;
        expect(sections.length).toEqual(expectedLength);
    })
})