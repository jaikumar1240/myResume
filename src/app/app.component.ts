import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { FormBuilder } from '@angular/forms';


interface Detail{
  institute:string,
  position:string,
  time:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  constructor( private formBuilder: FormBuilder){}

  ngOnInit() {
    AOS.init();
  } 
  title = 'Jai Kumar';
  carrers:Detail[] = [{
    institute:"Pristyn Care",
    position:"Front-End Web Developer",
    time:"(Sept 2021 - Currently working)"
  },
  {
    institute:"Pepcoding",
    position:"Java/Web Developer Intern",
    time:"(Feb 2020 - Aug 2020)"
  },
  {
    institute:"Tata Power",
    position:"Intern",
    time:"(June 2019 - Aug 2019)"
  }]
}
  