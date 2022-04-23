export function DTwelve(): number {
    return Math.floor(Math.random() * (12 - 1 + 1) + 1);
}

export function TwoDSix(): [number, number] {
    const tup: [number, number] = [0, 0]

    tup.forEach((item, index) => {
        tup[index] = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    })

    return tup;
}