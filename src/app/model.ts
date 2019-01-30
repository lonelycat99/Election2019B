
export class ElectionModel {
    id: string;
    nameArea: string;
    numberArea: number;
    province: string;
    district: string;
    party: string;
    nameRegister: string;
    score: number;
    targetScore: number
    tag: string
}

export class testArea {
    nameArea: string;
    subArea: string[];
    status: boolean
}

export class LocationModel {
    id: string;
    idProvince: string;
    locationCode: string;
    province: string;
    district: string;
    subDistrict: string;
    zipCode: string;
    note: string;
}

export class PartyScore {
    id: string;
    partyName: string;
    totalScore: number;
    areaScore: number;
    nameListScore: number;
    percentScore: number;
}
export class AreaElection {

    id: string;
    nameArea: string;
    partyName: string;
    score: string;
    tag: string;
    partyWinner: string;
}

export class FilterArea {
    name: string;
    isChecked: boolean;
}

export class DataMaxScore {
    id: string;
    nameArea: string;
    idProvince: string;
    nameParty: string;
    initialParty: string;
    noRegister: string;
    nameRegister: string;
    status: boolean;
    tag: string;
    score: number;
    targetScore: number;
    pollScore: number;
}

export class AreaData {
    Id: string;
    NameParty: string;
    NameArea: string;
    LocationCode: string;
    IDProvince: string;
    District: string;
    SubDistrict: string;
    NameRegister: string;
    NoRegister: string;
    Status: string;
    ScoreReceive: DataScore[];
}

export class DataScore {
    DateElection: Date;
    Score: number;
}

export class GlobalVaraible {
    static host: string = "http://electionvars.azurewebsites.net/api/Election/";
}