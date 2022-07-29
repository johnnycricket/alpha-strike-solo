import { TableInterface } from "./TableInterface";

export const MeleeRules: TableInterface[] = [
    {
        index: 0,
        instruction: 'Perform regular melee attack',
        shift: '0',
        range: [1, 2, 3]
    },
    {
        index: 1,
        instruction: 'If unit has Melee (MEL) special ability, use it.',
        shift: '-',
        range: [4, 5, 6]
    },
    {
        index: 2,
        instruction: 'Charge!',
        shift: '-',
        range: [7, 8, 9]
    },
    {
        index: 3,
        instruction: 'DFA',
        shift: '-',
        range: [10, 11, 12]
    }
];
