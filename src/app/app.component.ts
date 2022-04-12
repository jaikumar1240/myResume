import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { HostListener } from "@angular/core";
import * as AOS from 'aos';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
interface Detail{
  institute:string,
  position:string,
  time:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent implements OnInit {
  // @ViewChild('f') contForm: NgForm | undefined;
  // contactRecForm!: FormGroup
  constructor( private formBuilder: FormBuilder){}
  ContactForm = this.formBuilder.group({
    name:[''],
    email:[''],
    contact:[''],
    message:['']
  })
  runningTimeOut: any;

  showNavbar: boolean = false;
  darkMode: boolean = false;
  ngOnInit() {
    AOS.init();
    // this.contactRecForm = new FormGroup({
    //   'name' : new FormControl(null, Validators.required),
    //   'contact' : new FormControl(null),
    //   'email' : new FormControl(null, [Validators.required, Validators.email]),
    //   'message' : new FormControl(null, [Validators.required]),

    // })
  } 
  
  title = 'Jai Kumar';
  selectedBtn = 'profile'
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
//   skills = [{
//     skillname: "HTML",
//     skillvalue: "100%",
//   },
//   {
//     skillname: "CSS",
//     skillvalue: "95%",
//   },
//   {
//     skillname: "JAVASCRIPT",
//     skillvalue: "90%",
//   },
//   {
//     skillname: "JAVA",
//     skillvalue: "80%",
//   },
//   {
//     skillname: "ANGULAR",
//     skillvalue: "75%",
//   },
//   {
//     skillname: "BOOTSTRAP",
//     skillvalue: "65%",
//   },
//   {
//     skillname: "REACT",
//     skillvalue: "50%",
//   },
//   {
//     skillname: "VUE",
//     skillvalue: "30%",
//   },
// ]
  scroll(id:any){
      document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  }
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
  
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  // onSubmit(){
  //   console.log(this.contForm);
  //   console.log(this.contForm?.form.value.name);
  //   console.log(this.contForm?.form.value.email);
  //   this.contForm?.reset();
  // }
  // onSubmitRec(){
  //   console.log(this.contactRecForm);
  //   // this.contactRecForm.reset();
  // }
  
}
  