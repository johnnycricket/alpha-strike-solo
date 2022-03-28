import OrderService from './OrderService';
import {TableInterface} from '../types/TableInterface';

describe('All of OrderService', () => {
    const TestTable: TableInterface[] = [
        {
            instruction: 'entry sans shift or range',
            index: 0
        },
        {
            instruction: 'entry with 1 in range',
            shift: '+',
            range: [1],
            index: 1
        },
        {
            instruction: 'entry with 1 in range',
            shift: 'o',
            range: [2],
            index: 2
        },
        {
            instruction: 'entry with 2+ in range',
            shift: '-',
            range: [3, 4, 5],
            index: 3
        }
    ]
    describe('checkrange:', () => {
        test('checkrange returns true if number is found in range.', () => {
            const actual = OrderService.checkRange(4, TestTable[3]);
            expect(actual).toBeTruthy();
        });
        test('checkrange returns false if number isnt found in range.', () => {
            const actual = OrderService.checkRange(1, TestTable[2]);
            expect(actual).toBeFalsy();
        })
    });
    
    describe('pickOrder', () => {
        test('should return entry that matches input result', () => {
            const expected = {
                    instruction: 'entry with 1 in range',
                    shift: '+',
                    range: [1],
                    index: 1
            }
            const actual = OrderService.pickOrder(1, TestTable);
            expect(actual).toStrictEqual(expected);
        })
    })

    describe('shift', () => {
        test('should return current when shift is o - center', () => {
            const currentIndex = 2;
            const expected = {
                instruction: 'entry with 1 in range',
                shift: 'o',
                range: [2],
                index: 2
            }
            const actual = OrderService.shiftOrder(currentIndex, TestTable);
            expect(actual).toStrictEqual(expected);
        })

        test('should return next incement in index if +', () => {
            const currentIndex = 1;
            const expected = {
                instruction: 'entry with 1 in range',
                shift: 'o',
                range: [2],
                index: 2
            }
            const actual = OrderService.shiftOrder(currentIndex, TestTable);
            expect(actual).toStrictEqual(expected);
        })

        test('should return next decrement in index if -', () => {
            const currentIndex = 3;
            const expected = {
                instruction: 'entry with 1 in range',
                shift: 'o',
                range: [2],
                index: 2
            }
            const actual = OrderService.shiftOrder(currentIndex, TestTable);
            expect(actual).toStrictEqual(expected);
        })
    })
})