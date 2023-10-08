import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DiagnosisFormWidgetModule } from 'src/app/view/diagnosis-form-widget/diagnosis-form-widget.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule, 
        HomeRoutingModule,
        DiagnosisFormWidgetModule
    ],
})
export class HomeModule {}
