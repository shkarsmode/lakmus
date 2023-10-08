import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisFormUiComponent } from './diagnosis-form-ui.component';

describe('DiagnosisFormUiComponent', () => {
  let component: DiagnosisFormUiComponent;
  let fixture: ComponentFixture<DiagnosisFormUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisFormUiComponent]
    });
    fixture = TestBed.createComponent(DiagnosisFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
