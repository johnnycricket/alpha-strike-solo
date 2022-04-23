import { render, screen } from "@testing-library/react";
import DTwelveContainer from "./DTwelveContainer";

describe('All of DTwelveContainer', () => {
    it('should load the component', () => {
        render(<DTwelveContainer damageDice="variable"/>);
        const actual = screen.getByText('D12: Variable Damage');
        expect(actual).toBeTruthy();
    })
})