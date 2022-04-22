import { TableInterface } from "./TableInterface";

export const FiringRules: TableInterface[] = [
    {
        index: 0,
        instruction: 'Fire. Don\'t exceed net heat of 0',
        shift: '0',
        range: [1, 2, 3, 4]
    },
    {
        index: 1,
        instruction: 'Fire. Don\'t exceed net heat of 2',
        shift: '-',
        range: [5, 6, 7, 8, 9]
    },
    {
        index: 2,
        instruction: 'Fire. Don\'t exceed net heat of 4',
        shift: '-',
        range: [10, 11]
    },
    {
        index: 3,
        instruction: 'Alpha strike, exclude zero probabilities.',
        shift: '-',
        range: [12]
    }
]