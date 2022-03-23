import { TableInterface } from "./TableInterface";

export enum LightMediumMovementEnum {
    'Run towards enemy',
    'Flank enemy side arc',
    'Move furthest distance possible',
    'Evasive action, increate to-hit Defense',
    'If in view of 3 enemies, break LOS',
    'If hot or moderately damaged, run away'
}

//Prioritize Base Touch to enemy who moved
//Move last in lance

export const MeleeMovement: TableInterface[] = [
    {
        instruction: 'Prioritize base touch to an enemy who moved.'
    },
    {
        instruction: 'Move last in lance.'
    },
    {
        instruction: 'Run towards enemy.',
        shift: 'o',
        range: [1,2]
    },
    {
        instruction: 'Flank enemy side arc.',
        shift: '-',
        range: [3,4]
    },
    {
        instruction: 'Move furthest distance possible.',
        shift: '-',
        range: [5,6]
    },
    {
        instruction: 'Evasive action, increase to-hit defense.',
        shift: '-',
        range: [7,8]
    },
    {
        instruction: 'If in view of 3 enemies: break LOS.',
        shift: '-',
        range: [9,10]
    },
    {
        instruction: 'If hot or moderately damaged, run away.',
        shift: '-',
        range: [11,12]
    }
]