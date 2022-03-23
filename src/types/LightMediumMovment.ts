import { TableInterface } from "./TableInterface";

export const LightMediumMovement: TableInterface[] = [
    {
        instruction: 'Prioritize distance or to-hit defense.',
    },
    {
        instruction: 'Never reveal rear arc.'
    },
    {
        instruction: 'DFA if significangtly injured.',
        shift: '+',
        range: [1, 2]
    },
    {
        instruction: 'Seek a missile boat.',
        shift: '+',
        range: [3, 4]
    },
    {
        instruction: 'Seek a lighter unit.',
        shift: '+',
        range: [5]
    },
    {
        instruction: 'Jump to heavy cover or depth 1.',
        shift: '+',
        range: [6]
    },
    {
        instruction: 'Rally behind heavier ally.',
        shift: 'o',
        range: [7]
    },
    {
        instruction: 'Heaviest cover available.',
        shift: '-',
        range: [8]
    },
    {
        instruction: 'Use a hill for partial cover.',
        shift: '-',
        range: [9]
    },
    {
        instruction: 'Hide from LOS.',
        shift: '-',
        range: [10]
    },
    {
        instruction: 'Flee as far as possible.',
        shift: '-',
        range: [11]
    },
    {
        instruction: 'Run directly behind an enemy.',
        shift: '-',
        range: [12]
    }
]