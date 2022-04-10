import { TableInterface } from "./TableInterface";

export const HeavyAssaultMovement: TableInterface[] = [
    {
        index: 0,
        instruction: 'Prioritize LOS and cover/treelines.'
    },
    {
        index: 1,
        instruction: 'Always keep closest enemy in front arc.'
    },
    {
        index: 2,
        instruction: 'DFA or charge available enemy.',
        shift: '+',
        range: [1,2]
    },
    {
        index: 3,
        instruction: 'Seek missile boat or scout.',
        shift: '+',
        range: [3]
    },
    {
        index: 4,
        instruction: 'Go to depth 1 if overheat capable.',
        shift: '+',
        range: [4]
    },
    {
        index: 5,
        instruction: 'Use a hill for partial cover.',
        shift: '+',
        range: [5]
    },
    {
        index: 6,
        instruction: 'Run towards nearst enemy.',
        shift: '+',
        range: [6]
    },
    {
        index: 7,
        instruction: 'Walk towards nearest enemy.',
        shift: 'o',
        range: [7]
    },
    {
        index: 8,
        instruction: 'Stand still.',
        shift: '-',
        range: [8]
    },
    {
        index: 9,
        instruction: 'Move into heaviest cover available.',
        shift: '-',
        range: [9]
    },
    {
        index: 10,
        instruction: 'Gain height advantage.',
        shift: '-',
        range: [10]
    },
    {
        index: 11,
        instruction: 'Flee backwards, don\'t expose back.',
        shift: '-',
        range: [11]
    },
    {
        index: 12,
        instruction: 'Jump to heavy cover to depth 1.',
        shift: '-',
        range: [12]
    }
]