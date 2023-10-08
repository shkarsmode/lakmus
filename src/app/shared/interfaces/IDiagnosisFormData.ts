export interface IDiagnosisFormData {
    date: string;
    diagnosises: {
        diagnosis: Diagnosis;
        comment: string;
        onset_date: string;
    }[];
}

interface Diagnosis {
	id: number;
	chapterNumber: null | string;
	chapterName: string;
	blockNumber: string;
	blockName: string;
	code: string;
	name: string;
	shortName: string;
	isPublic: boolean;
}