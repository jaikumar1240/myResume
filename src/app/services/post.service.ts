import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Posts } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  @ViewChild('f') contForm: NgForm | undefined;

  constructor(private http: HttpClient) { }
  postContactDetails(payload : Posts){
    this.http
    .post('https://first-b528e-default-rtdb.firebaseio.com/contact.json',payload)
    .subscribe();
    this.contForm?.reset();
    alert("Details Submitted Successfully!");
  }
}
