import { DateTime } from "ionic-angular";

export class PartyScore {
    id: string;
    idParty: string;
    partyName: string;
    totalScore: number;
    areaScore: number;
    nameListScore: number;
    percentScore: number;
    isChecked: boolean;
}

export class otherScore {
    name: string;
    score: number;
}

export class FilterArea {
    name: string;
    isChecked: boolean;
}

export class ScoreArea {
    id: string;
    idArea: string;
    idParty: string;
    nameArea: string;
    nameInitial: string;
    nameParty: string;
    nameRegister: string;
    noRegister: string;
    score: number;
    source: number;
    status: boolean;
    tags: string[];
    statusEdit: boolean;
    statusAreaEdit: boolean;
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
    status: boolean;
    nameInitial: string;
    tags: string[];
    score: number;
    source: string;
}

export class ScorePoll {
    id: string;
    idParty: string;
    nameParty: string;
    idArea: string;
    nameArea: string;
    datePoll: DateTime;
    score: number;
    percentScore: number;
    source: string;
    targetScoreDefault: number;
    targetScore: number;
}

export class GetScoreParty {
    id: string;
    idArea: string;
    nameArea: string;
    partyWin: string;
    scoreMax: number;
    scoreMyParty: number;
    statusAreaEdit: boolean;
}

export class ScoreOther {
    score: number;
    scoreArea: number;
    scorePartyList: number;
    scorePercent: number;
    isChecked: boolean;
    status: boolean;
}


export class GlobalVaraible {
    static host: string = "https://electionvars.azurewebsites.net/api/ElectionV3/";
}