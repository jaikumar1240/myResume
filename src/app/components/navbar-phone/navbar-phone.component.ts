import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-navbar-phone',
  templateUrl: './navbar-phone.component.html',
  styleUrls: ['./navbar-phone.component.scss'],
  animations: [
    // animation triggers go here
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
@Input()
export class NavbarPhoneComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }
  scroll(id:any){
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    this.toggle = false;
  }
  toggle: boolean = false;
  showNavbar: boolean = false;
  selectedBtn = 'profile'
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(window.scrollY >= window.innerHeight){
      this.showNavbar = true;
    }
    else{
      this.showNavbar =  false;
    }
    if(window.scrollY>=window.innerHeight){
      this.selectedBtn = 'profile';
    }
    if(window.scrollY>=1.8*window.innerHeight){
      this.selectedBtn = 'experience';
    }
    if(window.scrollY>=2.8*window.innerHeight){
      this.selectedBtn = 'skills';
    }
    if(window.scrollY>=3.8*window.innerHeight){
      this.selectedBtn = 'contact';
    }
  }
  @HostListener('click', ['$event.target'])
  onClick(){
    console.log('clicked');
  }
  darkmodeHandler(){
    this.darkModeService.darkMode=!this.darkModeService.darkMode
  }
  get darkMode(){
    return this.darkModeService.darkMode
  }
  
}
