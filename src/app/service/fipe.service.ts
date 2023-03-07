import { AbstractService } from './abstract.service';

import { ModelYear } from 'src/app/models/model';
import { Vehicle } from '../models/vehicle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, Subject, tap } from 'rxjs';
import { Year } from '../models/year';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})

export class FipeService extends AbstractService {

  readonly linkAPI = 'https://parallelum.com.br/fipe/api/v1';

  constructor( 
    http: HttpClient) {
     super(http);
  }


  public getBrands(type: string): Observable<Array<Brand>> {
    const subject = new Subject<Array<Brand>>();

    this.get(`${this.linkAPI}/${type}/marcas`).pipe(catchError((error) => {subject.error(error) 
      return error }),
      tap((result:  Array<Brand>) => {
        subject.next(result)
      })
      ).subscribe();

      return subject;
  }

  public  getModels(type: string, brandCode: string): Observable<ModelYear> {
    const subject = new Subject<ModelYear>();

    this.get(`${this.linkAPI}/${type}/marcas/${brandCode}/modelos`)
    .pipe(catchError((error) => {
      subject.error(error)
      return error
    }),
      tap((result: ModelYear) => {
        subject.next(result)
      })).subscribe();

      return subject;
  }

  public getYears(type: string, brandCode: string, modelCode: string): Observable<Array<Year>> {
    const subject = new Subject<Array<Year>>();

    this.get(`${this.linkAPI}/${type}/marcas/${brandCode}/modelos/${modelCode}/anos`)
      .pipe(catchError((error) => {
        subject.error(error)

        return error
      }),
        tap((result: Array<Year>) => {
          subject.next(result)
        })
        ).subscribe();

        return subject;
  }

  public getVehicle(type: string, brandCode: string, modelCode: string, yearCode: string) {
    const subject = new Subject<Vehicle>();

    this.get(`${this.linkAPI}/${type}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`)
      .pipe(catchError((error) => {
        subject.error(error)
        return error
      }),
        tap((result: Vehicle) => {
          subject.next(result)       
         })
          ).subscribe();
          return subject;
      }
}