import { TableInterface } from "./TableInterface";

export const TargetingRules: TableInterface[] = [
    {
        index: 0,
        instruction: 'Prioritize shut down opponents, or rear armor apportunities.'
    },
    {
        index: 1,
        instruction: 'Heaviest unit available.',
        shift: '+',
        range: [1,2]
    },
    {
        index: 2,
        instruction: 'Lightest unit available.',
        shift: '+',
        range: [3]
    },
    {
        index: 3,
        instruction: 'Select target with highest damage output.',
        shift: '+',
        range: [4]
    },
    {
        index: 4,
        instruction: 'Focus fire on ally\'s target.',
        shift: '+',
        range: [5]
    },
    {
        index: 5,
        instruction: 'Focus on target with exposed internals / criticals.',
        shift: '+',
        range: [6]
    },
    {
        index: 6,
        instruction: 'Target closet enemy or mission objective.',
        shift: 'o',
        range: [7]
    },
    {
        index: 7,
        instruction: 'Target most damaged enemy.',
        shift: '-',
        range: [8]
    },
    {
        index: 8,
        instruction: 'Best to-hit modifier for highest damage weapon range.',
        shift: '-',
        range: [9]
    },
    {
        index: 9,
        instruction: 'Target Missile Boat or artillery.',
        shift: '-',
        range: [10]
    },
    {
        index: 10,
        instruction: 'Target Melee/Brawler/Striker.',
        shift: '-',
        range: [11]
    },
    {
        index: 11,
        instruction: 'Target whatever enemy shot last.',
        shift: '-',
        range: [12]
    }
]