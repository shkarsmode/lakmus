interface Encounter {
    date: string;
}

export interface Condition {
    id: string;
    context: {
        identifier: {
            type: {
                coding: {
                    system: string;
                    code: string;
                }[];
            };
            value: string;
        };
    };
    code: {
        coding: {
            system: string;
            code: string;
        }[];
    };
    notes?: string;
    onset_date: string;
}

export interface IDiagnosisDetails {
    encounter: Encounter;
    conditions?: Condition[];
}
