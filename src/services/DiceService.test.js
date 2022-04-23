import { DTwelve, TwoDSix} from './DiceService';

describe('All of DTwelve', () => {
    it('should return a number between 1 and 12', () => {
        const actual = DTwelve();
        expect(actual).toBeGreaterThan(0);
        expect(actual).toBeLessThan(13);
    })
})

describe('All of TwoDSix', () => {
    it('should return a tuple of numbers which are between 1 and 6', () => {
        const actual = TwoDSix();
        console.log(actual)
        expect(actual[0]).toBeGreaterThan(0);
        expect(actual[1]).toBeGreaterThan(0);
        expect(actual[0]).toBeLessThan(7);
        expect(actual[1]).toBeLessThan(7);
    })
})