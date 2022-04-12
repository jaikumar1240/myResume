import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @Input() abc:any;
  constructor(private darkmodeservice: DarkModeService) { }
  
  ngOnInit(): void {
  }
  scroll(id:any){
    console.log('clickeddd');
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    
  }
  get darkMode(){
    return this.darkmodeservice.darkMode;
  }
}
