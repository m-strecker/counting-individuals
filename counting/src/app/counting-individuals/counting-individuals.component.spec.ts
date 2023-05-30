import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingIndividualsComponent } from './counting-individuals.component';

describe('CountingIndividualsComponent', () => {
  let component: CountingIndividualsComponent;
  let fixture: ComponentFixture<CountingIndividualsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountingIndividualsComponent]
    });
    fixture = TestBed.createComponent(CountingIndividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
