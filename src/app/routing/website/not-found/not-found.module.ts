import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
    declarations: [
        NotFoundPageComponent
    ],
    imports: [
        CommonModule, 
        NotFoundRoutingModule
    ],
})
export class NotFoundModule {}
