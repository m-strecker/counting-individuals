import { Injectable } from '@angular/core';
//import other counting services
import { PatientCountService } from './patient-count.service';
import { DoctorCountService } from './doctor-count.service';

@Injectable({
  providedIn: 'root'
})
export class TotalCountService {

  constructor(
    private patientCountService: PatientCountService,
    private doctorCountService: DoctorCountService
  ) { }


  getTotalCount(hospitalPatients: any[], hospitalDoctors: any[]): number {
    const patientCount = this.patientCountService.countPatients(hospitalPatients);
    const doctorCount = this.doctorCountService.countDoctors(hospitalDoctors);
    return patientCount + doctorCount;
  }





}
