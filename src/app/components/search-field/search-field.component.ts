import { Brand } from './../../models/brand';
import { Component, OnInit } from '@angular/core';

import { Vehicle } from './../../models/vehicle';
import { FipeService } from 'src/app/service/fipe.service';
import { types } from 'src/app/models/types';
import { ModelVehicle, YearVehicle, ModelYear } from 'src/app/models/model';
import { Year } from 'src/app/models/year';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})

export class SearchFieldComponent implements OnInit {
  
  
  resultadoFinal: number = 0;
  msg: string = '';


  onKeyUp(event: KeyboardEvent) {
    this.valorDigitado = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    let valorTratado = (this.vehicle.valor).slice(3, -1).replaceAll('.', '').replace(',', '.');
    this.resultadoFinal = Number(valorTratado) - Number(this.valorDigitado);

    if (valorTratado < this.valorDigitado) {
      this.msg = "O valor está abaixo da tabela FIPE"
    }
    else if (valorTratado > this.valorDigitado) {
      this.msg = "O valor está acima da tabela FIPE"
    }
    else {
      this.msg = "O valor está igual ao da tabela FIPE"
    }

    return this.resultadoFinal;
  }

  vehicle: Vehicle = new Vehicle;

  types = types;

  brands: Array<Brand> = [];
  modelsVehicle: Array<ModelVehicle> = [];
  yearsVehicle: Array<YearVehicle> = [];
  years: Array<Year> = [];

  type: string = types[0];
  brandCode: string = "";
  modelCode: string = "";
  yearCode: string = "";


  display: boolean = false;
  valorDigitado: any = '';


  constructor(private fipeService: FipeService) { }

  ngOnInit(): void {
    this.fipeService.getBrands(this.type).subscribe(data => this.brands = data)
  }
  

  getBrands() {
    this.brandCode = '';
    this.yearCode  = '';
    this.modelCode = "";

    this.fipeService.getBrands(this.type).subscribe(data => this.brands =  data)
  }

  getModels() {
    this.modelCode = '';
    this.yearCode = '';


    this.fipeService.getModels(this.type, this.brandCode).subscribe(data => {
      this.modelsVehicle = data.modelos
      this.yearsVehicle = data.anos
    })
  }

  getYears() {
    this.yearCode = '';

    this.fipeService.getYears(this.type, this.brandCode, this.modelCode)
      .subscribe(data => { 
        this.years = data})
  }

  getVehicle() {
    this.display = true;
    
    this.fipeService.getVehicle(this.type, this.brandCode, this.modelCode, this.yearCode)
      .subscribe(data => {
        this.vehicle = data
      })
      return this.display;
  }


}

