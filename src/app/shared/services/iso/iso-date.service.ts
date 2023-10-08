import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class IsoDateService {
    public getDateInIsoFormatByTimezone(date: string, timeZoneOffsetHours: number = 3): string {
        const tempDate = date ? new Date(date) : new Date();
        tempDate.setUTCHours(tempDate.getUTCHours() + timeZoneOffsetHours);
        const isoDateString = tempDate.toISOString();

        return isoDateString;
    }
}
