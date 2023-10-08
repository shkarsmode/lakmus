import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisFormWidgetComponent } from './diagnosis-form-widget.component';

describe('DiagnosisFormWidgetComponent', () => {
  let component: DiagnosisFormWidgetComponent;
  let fixture: ComponentFixture<DiagnosisFormWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisFormWidgetComponent]
    });
    fixture = TestBed.createComponent(DiagnosisFormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
