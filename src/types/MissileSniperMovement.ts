import { TableInterface } from "./TableInterface";

export const MissileSniperMovement: TableInterface[] = [
    {
        index: 0,
        instruction: 'Prioritize LOS'
    },
    {
        index: 1,
        instruction: 'Keep closest enemy in front arc.'
    },
    {
        index: 2,
        instruction: 'Get closer to map edge.',
        shift: 'o',
        range: [1,2]
    },
    {
        index: 3,
        instruction: 'Perch in heavy cover along treeline.',
        shift: '-',
        range: [3,4]
    },
    {
        index: 4,
        instruction: 'Head to higher ground.',
        shift: '-',
        range: [5,6]
    },
    {
        index: 5,
        instruction: 'Stand still.',
        shift: '-',
        range: [7,8]
    },
    {
        index: 6,
        instruction: 'Close to medium distance.',
        shift: '-',
        range: [9,10]
    },
    {
        index: 7,
        instruction: 'Jump/Sprint to heaviest cover.',
        shift: '-',
        range: [11,12]
    }
]