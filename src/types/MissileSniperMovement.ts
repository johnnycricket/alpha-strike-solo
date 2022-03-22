import { TableInterface } from "./tableInterface";

export enum MissileSniperMovementEnum {
    'Get Closer to map edge',
    'Perch in heavy cover along treeline',
    'Head to high ground',
    'Stand still',
    'Close to medium distance',
    'Jump/Sprint to heaviest cover'
}

//Prioritize LOS
//Keep closest enemy in front arc

export const MissileSniperMovement: TableInterface[] = [
    {
        instruction: 'Prioritize LOS'
    },
    {
        instruction: 'Keep closest enemy in front arc'
    },
    {
        instruction: 'Get closer to map edge.',
        shift: 'o',
        range: [1,2]
    },
    {
        instruction: 'Perch in heavy cover along treeline.',
        shift: '-',
        range: [3,4]
    },
    {
        instruction: 'Head to higher ground.',
        shift: '-',
        range: [5,6]
    },
    {
        instruction: 'Stand still.',
        shift: '-',
        range: [7,8]
    },
    {
        instruction: 'Close to medium distance.',
        shift: '-',
        range: [9,10]
    },
    {
        instruction: 'Jump/Sprint to heaviest cover.',
        shift: '-',
        range: [11,12]
    }
]