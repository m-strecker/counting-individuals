import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientCountService {

  countPatients(hospitalPatients: any[]): number {
    return hospitalPatients.length;
  }
  constructor() { }
}
