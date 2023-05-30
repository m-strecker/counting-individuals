import { Component } from '@angular/core';
//import total count service only
import { TotalCountService } from '../total-count.service';

@Component({
  selector: 'app-counting-individuals',
  templateUrl: './counting-individuals.component.html',
  styleUrls: ['./counting-individuals.component.css']
})
export class CountingIndividualsComponent {

  hospitalDoctors:Doctor[] =
  [
    {name: 'Dr. John Chilton', specialization: 'Dermatology'},
    {name: 'Dr. Jan Vaston', specialization: 'Psychiatry'},
    {name: 'Dr. Beth Johnson', specialization: 'Orthopedics'},
    {name: 'Dr. Sarah Fields', specialization: 'Pediatrics'}

  ];

  hospitalPatients:Patient[] =
  [
    {name: 'Peter Smith', illness: 'Cold'},
    {name: 'Janice Beckham', illness: 'Flu'},
    {name: 'Terrence Williams', illness: 'Sprain'},
    {name: 'Linda Watson', illness: 'Flu'}

  ];

  constructor(
    private totalCountService: TotalCountService
  ) {}

  calculateTotalCount(): number {
    return this.totalCountService.getTotalCount(this.hospitalPatients, this.hospitalDoctors);
  }



}

//Interface for Doctor
interface Doctor {
  name:string;
  specialization: string;
}

//Interface for Patient
interface Patient {
  name:string;
  illness: string;
}

