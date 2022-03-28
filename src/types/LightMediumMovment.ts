import { TableInterface } from "./TableInterface";

export const LightMediumMovement: TableInterface[] = [
    {
        instruction: 'Prioritize distance or to-hit defense.',
        index: 0
    },
    {
        instruction: 'Never reveal rear arc.',
        index: 1
    },
    {
        instruction: 'DFA if significangtly injured.',
        shift: '+',
        range: [1, 2],
        index: 2
    },
    {
        instruction: 'Seek a missile boat.',
        shift: '+',
        range: [3, 4],
        index: 3
    },
    {
        instruction: 'Seek a lighter unit.',
        shift: '+',
        range: [5],
        index: 4
    },
    {
        instruction: 'Jump to heavy cover or depth 1.',
        shift: '+',
        range: [6],
        index: 5
    },
    {
        instruction: 'Rally behind heavier ally.',
        shift: 'o',
        range: [7],
        index: 6
    },
    {
        instruction: 'Heaviest cover available.',
        shift: '-',
        range: [8],
        index: 7
    },
    {
        instruction: 'Use a hill for partial cover.',
        shift: '-',
        range: [9],
        index: 8
    },
    {
        instruction: 'Hide from LOS.',
        shift: '-',
        range: [10],
        index: 9
    },
    {
        instruction: 'Flee as far as possible.',
        shift: '-',
        range: [11],
        index: 10
    },
    {
        instruction: 'Run directly behind an enemy.',
        shift: '-',
        range: [12],
        index: 11
    }
]