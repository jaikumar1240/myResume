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
    return this.http
    .post('https://firstproject-16bef-default-rtdb.firebaseio.com//contact.json',payload)
  }
}
