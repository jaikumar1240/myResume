import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') contForm: NgForm | undefined;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  onSubmit(){
    // console.log(this.contForm?.value);
    this.http.post('https://first-b528e-default-rtdb.firebaseio.com/contact.json',this.contForm?.value).
    subscribe(res =>{
      // console.log(res);
      
    })
    this.contForm?.reset();
    alert("Details Submitted Successfully!");
  }

}
