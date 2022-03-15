export enum UnitTypes {
    BM = 'BM', //Battlemech
    CV = 'CV', //Combat Vehicle
    AF = 'AF', //aerospace fighter
    CI = 'CI', //convential infantry
    IM = 'IM', //industrialmech
    PM = 'PM', //protomech
    SV = 'SV', //Support Vehicle
    UK = 'UK', //Unknown
    NO = 'NO' //None
}

export interface UnitType {
    id: number,
    unitType: UnitTypes
}