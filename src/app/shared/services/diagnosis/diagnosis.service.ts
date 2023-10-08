import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { IDiagnosisFormData } from '../../interfaces/IDiagnosisFormData';
import { IDiagnosises } from '../../interfaces/IDiagnosises';
import { IDiagnosisDetails } from '../../interfaces/IDiagnosisesDetails';
import { BASE_PATH_URL, CORS_ANYWHERE_PATH_URL } from '../../tokens/environment.tokens';
import { IsoDateService } from '../iso/iso-date.service';


@Injectable({
    providedIn: 'root',
})
export class DiagnosisService {
    private readonly SEARCH_VALUE: string = 'Ост';

    constructor(
        private http: HttpClient,
        private isoDateService: IsoDateService,
        @Inject(BASE_PATH_URL) private basePathUrl: string,
        @Inject(CORS_ANYWHERE_PATH_URL) private corsAnywherePathUrl: string
    ) {}

    public getBasicDiagnosises(): Observable<IDiagnosises> {
        const httpOptions = {
            params: {
                IsPublic: true,
                Search: this.SEARCH_VALUE
            },
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.get<IDiagnosises>(
            this.corsAnywherePathUrl + this.basePathUrl, 
            httpOptions
        );
    }

    public getTransformedFormData(data: IDiagnosisFormData): IDiagnosisDetails {
        const guid = uuidv4();
        const date = this.isoDateService.getDateInIsoFormatByTimezone(data.date);
    
        return {
            encounter: { date },
            conditions: 
                data.diagnosises?.map(condition => ({
                    id: guid,
                    context: {
                        identifier: {
                            type: {
                                coding: [{
                                    system: "eHealth/resources",
                                    code: "encounter"
                                }]
                            },
                            value: condition.diagnosis.id.toString()
                        }
                    },
                    code: {
                        coding: [{
                            system: 'eHealth/ICPC2/condition_codes',
                            code: condition.diagnosis.code
                        }]
                    },
                    notes: condition.comment,
                    onset_date: 
                        this.isoDateService.getDateInIsoFormatByTimezone(condition.onset_date)
                }))
        }
    }
}
