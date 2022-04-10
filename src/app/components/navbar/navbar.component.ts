import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  scroll(id:any){
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  }
  showNavbar: boolean = false;
  runningTimeOut: any;
  selectedBtn = 'profile'
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(this.runningTimeOut){
      clearTimeout(this.runningTimeOut);
    }
    if(window.scrollY>=0.8*window.innerHeight){
      this.showNavbar = true;
      this.runningTimeOut = setTimeout(() => {
        this.showNavbar = false
      }, 5000);
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
}
