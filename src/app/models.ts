import { c } from "@angular/core/src/render3";

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
    nameArea : string;
    subArea: string[];
    status : boolean
}

export class GlobalVaraible {
    static host: string = "http://electionvars.azurewebsites.net/api/Election/";
}