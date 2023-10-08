import { Component, Input } from '@angular/core';
import { IDiagnosisDetails } from 'src/app/shared/interfaces/IDiagnosisesDetails';

@Component({
    selector: 'app-diagnosis-form-details-ui',
    templateUrl: './diagnosis-form-details-ui.component.html',
    styleUrls: ['./diagnosis-form-details-ui.component.scss'],
})
export class DiagnosisFormDetailsUiComponent {
    @Input() data: IDiagnosisDetails;
}
