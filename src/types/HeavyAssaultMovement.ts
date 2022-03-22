import { TableInterface } from "./tableInterface";

export enum HeavyAssaultMovementEnum {
    'DFA or charge available enemy',
    'Seek missile boat or scout',
    'Go to depth 1 if overheat capable',
    'Use a hill for partial cover',
    'Run towards nearest enemy',
    'Walk towards nearest enemy',
    'Stand still',
    'Get to heaviest cover available',
    'Gain height advantage',
    'Flee backwards, don\'t expose back',
    'Jump/Sprint to heavy cover or depth 1'
}

//Prioritize LOS and cover/treelines
//Always keep closet enemy in front arc

export const HeavyAssaultMovement: TableInterface[] = {
    {}
}