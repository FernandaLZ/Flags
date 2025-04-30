import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../../services/countries.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryInfo} from '../../../models/CountryInfo';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule,TranslateModule, MatButton],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit{
  country?: CountryInfo;
  countryCode?:string
  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.countryCode = this.route.snapshot.paramMap.get('code')!;
  }
  ngOnInit(): void {
    this.countriesService.getCountryByCode(this.countryCode??'').subscribe({
      next: (data) => {
        this.country = data;
        console.log(data)
      },
      error: (err) => console.error(err),
    });
  }
  obtenerLenguajes(obj: any) {
    if(obj)
      return Object.keys(obj);
    return ['']
  }
  obtenerMonedas(obj: any) {
    if (obj)
      return Object.keys(obj);
    return ['']
  }
  regresar(){
    this.router.navigate(['flags/list']).then(_=>false);
  }

}
