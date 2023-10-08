import { InjectionToken } from '@angular/core';

export const BASE_PATH_URL: InjectionToken<string> = 
	new InjectionToken('basePathUrl');
	
export const CORS_ANYWHERE_PATH_URL: InjectionToken<string> = 
	new InjectionToken('corsAnywherePathUrl');