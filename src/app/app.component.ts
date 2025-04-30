import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import translationsES from "../../src/assets/i18n/es.json";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setTranslation('es', translationsES);
    this.translate.addLangs(['es']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');

  }
  title = 'Flags';
}
