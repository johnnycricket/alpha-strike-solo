import { TableInterface } from "./TableInterface";

export const HeavyAssaultMovement: TableInterface[] = [
    {
        instruction: 'Prioritize LOS and cover/treelines.'
    },
    {
        instruction: 'Always keep closest enemy in front arc.'
    },
    {
        instruction: 'DFA or charge available enemy.',
        shift: '+',
        range: [1,2]
    },
    {
        instruction: 'Seek missile boat or scout.',
        shift: '+',
        range: [3]
    },
    {
        instruction: 'Go to depth 1 if overheat capable.',
        shift: '+',
        range: [4]
    },
    {
        instruction: 'Use a hill for partial cover.',
        shift: '+',
        range: [5]
    },
    {
        instruction: 'Run towards nearst enemy.',
        shift: '+',
        range: [6]
    },
    {
        instruction: 'Walk towards nearest enemy.',
        shift: 'o',
        range: [7]
    },
    {
        instruction: 'Stand still.',
        shift: '-',
        range: [8]
    },
    {
        instruction: 'Move into heaviest cover available.',
        shift: '-',
        range: [9]
    },
    {
        instruction: 'Gain height advantage.',
        shift: '-',
        range: [10]
    },
    {
        instruction: 'Flee backwards, don\'t expose back.',
        shift: '-',
        range: [11]
    },
    {
        instruction: 'Jump to heavy cover to depth 1.',
        shift: '-',
        range: [12]
    }
]