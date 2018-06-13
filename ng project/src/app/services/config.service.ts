import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  showPageDescription: boolean = true;

  minPasswordLength: number = 6;
}
