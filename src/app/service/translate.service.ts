import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  language = 'en';
  langJson: any = {};

  constructor(private httpClient: HttpClient) {

  }

  updateLanguage(lang): Promise<{}> {
    this.language = lang;
    return new Promise<{}>((resolve, reject) => {
    this.httpClient.get('assets/i18n/' + this.language + '.json').subscribe(data => {
    this.langJson = data;
    resolve(this.langJson);

    },
    error => {
      this.langJson = {};
      resolve(this.langJson);
    });
  });
}


}
