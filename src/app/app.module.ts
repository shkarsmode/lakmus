import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { AppComponent } from './app.component';
import { WebsiteModule } from './routing/website/website.module';
import { BASE_PATH_URL, CORS_ANYWHERE_PATH_URL } from './shared/tokens/environment.tokens';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        WebsiteModule,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [
        { provide: BASE_PATH_URL, useValue: environment.basePathUrl },
        { provide: CORS_ANYWHERE_PATH_URL, useValue: environment.corsAnywherePathUrl },
        DatePipe
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
