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

export class GlobalVaraible {
    static host: string = "http://electionvars.azurewebsites.net/api/Election/";
}