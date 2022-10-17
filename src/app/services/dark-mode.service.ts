import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
ngOnInit(): void {
  this.darkMode = localStorage.getItem("isDarkMode");
}
  constructor() { }
  darkMode: boolean| string | null = localStorage.getItem("isDarkMode");
  
  darkmodeHandler(){
    this.darkMode=!this.darkMode;
    if(this.darkMode){
      localStorage.setItem("isDarkMode", "true");
    }
    else{
      localStorage.setItem("isDarkMode", "");
    }
  }
}
