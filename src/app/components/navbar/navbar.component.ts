import { Component, OnInit } from '@angular/core';

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
  selectedBtn = 'profile'

}
