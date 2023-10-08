import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDiagnosisFormData } from 'src/app/shared/interfaces/IDiagnosisFormData';
import { IDiagnosises } from '../../../../shared/interfaces/IDiagnosises';

@Component({
    selector: 'app-diagnosis-form-ui',
    templateUrl: './diagnosis-form-ui.component.html',
    styleUrls: ['./diagnosis-form-ui.component.scss'],
})
export class DiagnosisFormUiComponent implements OnInit {
    @Input() diagnosises: IDiagnosises | null;
    @Input() minDate: string;
    @Output() submitForm: EventEmitter<IDiagnosisFormData> = new EventEmitter();
    
    public formGroup: FormGroup;

    public ngOnInit(): void {
        this.initFormGroup();
        this.addDiagnosis();
    }

    private initFormGroup(): void {
        this.formGroup = new FormGroup({
            date: new FormControl(''),
            diagnosises: new FormArray([])
        });
    }

    public addDiagnosis(): void {
        const diagnosisFormGroup = new FormGroup({
            diagnosis: new FormControl('', Validators.required),
            comment: new FormControl(''),
            onset_date: new FormControl('')
        });

        this.diagnosisesFormArray.push(diagnosisFormGroup);
    }

    public get diagnosisesFormArray(): FormArray {
        return this.formGroup.get('diagnosises') as FormArray;
    }

    public removeDiagnosis(index: number): void {
        this.diagnosisesFormArray.removeAt(index);
    }

    public onSelectChange(index: number): void {
        const onsetDateControl = this.diagnosisesFormArray.at(index).get('onset_date');
        onsetDateControl?.setValue(new Date());
    }

    public onSubmit(): void {
        if (this.formGroup.invalid) return;
        this.submitForm.next(this.formGroup.value);
    }
}
