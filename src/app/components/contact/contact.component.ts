import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Posts } from 'src/app/interfaces/posts.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') contForm: NgForm | undefined;

  constructor(private http: HttpClient,
              private postService: PostService) { }
  ngOnInit(): void {
    this.fetchPosts();
  }
  onSubmit(){
    console.log(this.contForm);
    const payload = {
      ...this.contForm?.value
    }
   this.postService.postContactDetails(payload);
  }
  personArr = {};
  private fetchPosts(){
    this.http
    .get<{[key:string]:Posts}>('https://first-b528e-default-rtdb.firebaseio.com/contact.json')
    .pipe(
      map(responseData=>{
        let contactArr: Posts[] = [];
        for(let key in responseData){
          if(responseData.hasOwnProperty(key)){
            contactArr.push({...responseData[key],id : key})
          }
        }
        return contactArr;
      }))
    .subscribe(response =>{
      console.log(response);
    })
  }


}
