export enum UnitRoles {
    Ambusher = 'Ambusher',
    Attack = 'Attack',
    Brawler = 'Brawler',
    Dogfighter = 'Dogfighter',
    FastDogFighter = 'Fast Dogfighter',
    FireSupport = 'Fire-Support',
    Interceptor = 'Interceptor',
    Juggernaut = 'Juggernaut',
    MissileBoat = 'Missile Boat',
    None = 'None',
    Scout = 'Scout',
    Skirmisher = 'Skirmisher',
    Sniper = 'Sniper',
    Striker = 'Striker',
    Transport = 'Transport'
}

export interface UnitRole {
    id: number,
    unitRole: UnitRoles
}
