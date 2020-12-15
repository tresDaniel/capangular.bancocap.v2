import { InjectionToken } from '@angular/core';
import { IConfig } from 'ngx-mask';

export const GOOGLE_URL = 'www.google.com';

export const maskConfig: Partial<IConfig> = {
  validation: false,
};
