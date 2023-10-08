export interface IDiagnosis {
	readonly id: number;
	readonly chapterNumber: string | null;
	readonly chapterName: string;
	readonly blockNumber: string;
	readonly blockName: string;
	readonly code: string;
	readonly name: string;
	readonly shortName: string;
	readonly isPublic: boolean;
}

export type IDiagnosises = Array<IDiagnosis>;