import { TranslateService } from './service/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pricing-with-basic-translation';
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    // this.translateService.
  }

  selectLang(lang) {
    this.translateService.updateLanguage(lang);
  }
}
