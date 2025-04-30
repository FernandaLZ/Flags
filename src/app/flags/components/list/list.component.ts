import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../../services/countries.service';
import {Country} from '../../../models/country';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-list',
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
    private countriesService:CountriesService
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
  get filteredCountries(): Country[] {
    return this.countries.filter((c) =>
      c.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  getBorderColor(region: string): string {
    switch (region) {
      case 'Europe':
        return 'border-blue-500';
      case 'Asia':
        return 'border-red-500';
      case 'Africa':
        return 'border-yellow-500';
      case 'Americas':
        return 'border-green-500';
      case 'Oceania':
        return 'border-purple-500';
      default:
        return 'border-gray-300';
    }
  }
  irInfo(country:Country){

  }
}
