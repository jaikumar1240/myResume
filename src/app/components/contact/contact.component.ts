import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Posts } from 'src/app/interfaces/posts.interface';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') contForm: NgForm | undefined;

  constructor(private http: HttpClient,
              private postService: PostService,
              private darkModeService: DarkModeService) { }
  ngOnInit(): void {
  }


  get darkMode(){
    return this.darkModeService.darkMode;
  }
  
  onSubmit(){
    const payload = {
      ...this.contForm?.value
    }
   this.postService.postContactDetails(payload)
   .subscribe(res=>{
    this.contForm?.reset();
    alert("Details Submitted Successfully!");
  },error=>{
    alert("Error Occurred while Saving Details.\nPlease Try Again Later!");
  });
  }
}
