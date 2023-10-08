import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DiagnosisFormDetailsUiComponent } from './ui/diagnosis-form-details-ui/diagnosis-form-details-ui.component';
import { DiagnosisFormUiComponent } from './ui/diagnosis-form-ui/diagnosis-form-ui.component';
import { DiagnosisFormWidgetComponent } from './widgets/diagnosis-form-widget/diagnosis-form-widget.component';

@NgModule({
    declarations: [
        DiagnosisFormWidgetComponent,
        DiagnosisFormUiComponent,
        DiagnosisFormDetailsUiComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatIconModule,
        ReactiveFormsModule
    ],
    exports: [
        DiagnosisFormWidgetComponent
    ]
})
export class DiagnosisFormWidgetModule {}
