import { TranslateService } from './../service/translate.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(key: any, args?: any): any {
    return this.translateService.langJson[key]  || key;
  }

}
