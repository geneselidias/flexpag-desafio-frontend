export class ModelYear {
    anos: Array<YearVehicle>  = [];
    modelos: Array<ModelVehicle> = [];
}

export class YearVehicle {
    public "nome": string;
    public "codigo": string;
}


export class ModelVehicle {
    public "nome": string;
    public "codigo": string;
}

