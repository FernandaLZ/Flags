import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../../services/countries.service';
import {Country} from '../../../models/country';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone:true,
  imports: [FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  countries:Country[]=[]
  searchTerm: string = '';
  constructor(
    private countriesService:CountriesService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.countriesService.getCountries().subscribe({
      next: country=>{
        this.countries = country;
      },
      error:err=>{
        console.error(err)
      }
    })
  }
  get ciudadesFiltradas(): Country[] {
    return this.countries.filter((c) =>
      c.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  getBorderColor(region: string): string {
    switch (region) {
      case 'Europe':
        return 'border-blue-200';
      case 'Asia':
        return 'border-red-200';
      case 'Africa':
        return 'border-yellow-200';
      case 'Americas':
        return 'border-green-200';
      case 'Oceania':
        return 'border-purple-200';
      default:
        return 'border-gray-200';
    }
  }
  irInfo(country:Country){
    this.router.navigate(['flags/info', country.ccn3]).then(_=>false);
  }
}
