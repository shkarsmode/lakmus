import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisFormDetailsUiComponent } from './diagnosis-form-details-ui.component';

describe('DiagnosisFormDetailsUiComponent', () => {
  let component: DiagnosisFormDetailsUiComponent;
  let fixture: ComponentFixture<DiagnosisFormDetailsUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisFormDetailsUiComponent]
    });
    fixture = TestBed.createComponent(DiagnosisFormDetailsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
