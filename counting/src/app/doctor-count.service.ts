import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorCountService {

  countDoctors(hospitalDoctors: any[]): number {
    return hospitalDoctors.length;
  }
  
  constructor() { }
}
