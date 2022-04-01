import { render, screen } from "@testing-library/react";
import Deployment from "./Deployment";

describe("all of deployment", () => {
    test('should load', async () => {
        render(<Deployment/>);
        const content = await screen.findByText("deployment")
        expect(content).toBeTruthy();
    })
})