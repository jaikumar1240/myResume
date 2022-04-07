import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') contForm: NgForm | undefined;
  contactRecForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.contactRecForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'contact' : new FormControl(null),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'message' : new FormControl(null, [Validators.required]),

    })
  }
  onSubmit(){
    console.log(this.contForm);
    console.log(this.contForm?.form.value.name);
    console.log(this.contForm?.form.value.email);
    this.contForm?.reset();
  }
  onSubmitRec(){
    console.log(this.contactRecForm);
    // this.contactRecForm.reset();
  }

}
