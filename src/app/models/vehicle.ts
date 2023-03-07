export class Vehicle {
    public "Valor": number;
    public "Marca": string;
    public "Modelo": string;
    public "AnoModelo": number;
    public "Combustivel": string;
    public "CodigoFipe": number;
    public "MesReferencia": string;
    public "TipoVeiculo": number;
    public "SiglaCombustivel": string;

    constructor() {

    }

    public setValor(valor: any) {
        this.Valor = valor;
    }

    public get valor(): any {
        return this.Valor;
    }
}

