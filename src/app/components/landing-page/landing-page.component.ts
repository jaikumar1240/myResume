import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(id:any){
    console.log('clickeddd');
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    
}

}
