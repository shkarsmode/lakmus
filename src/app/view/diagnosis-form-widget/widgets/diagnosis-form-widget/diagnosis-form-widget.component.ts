import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDiagnosisFormData } from 'src/app/shared/interfaces/IDiagnosisFormData';
import { IDiagnosisDetails } from 'src/app/shared/interfaces/IDiagnosisesDetails';
import { DiagnosisService } from 'src/app/shared/services/diagnosis/diagnosis.service';
import { IDiagnosises } from '../../../../shared/interfaces/IDiagnosises';

@Component({
    selector: 'app-diagnosis-form-widget',
    templateUrl: './diagnosis-form-widget.component.html',
    styleUrls: ['./diagnosis-form-widget.component.scss'],
})
export class DiagnosisFormWidgetComponent implements OnInit {
    public diagnosises$: Observable<IDiagnosises>;
    public minDate: string;
    public transformedFormData: IDiagnosisDetails;

    constructor(
        private diagnosisService: DiagnosisService,
        private datePipe: DatePipe
    ) {}

    public ngOnInit(): void {
        this.initMinDateToRestrictDateField();
        this.initBasicDiagnosises();
    }

    public onSubmit(formData: IDiagnosisFormData): void {
        this.transformedFormData = this.diagnosisService.getTransformedFormData(formData);
    }

    private initBasicDiagnosises(): void {
        this.diagnosises$ = this.diagnosisService.getBasicDiagnosises();
    }

    private initMinDateToRestrictDateField(): void {
        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') as string;
    }
}
