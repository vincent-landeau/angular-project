import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  static readonly EMAIL = /^.+\@\S+\.\S+$/;
  contactFormSubmitted = false;
  contactFormShowErrors = false;

  constructor() {
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(ContactFormComponent.EMAIL)]),
      subject: new FormControl(null),
      comments: new FormControl(null),
    })
  }

  submitForm() {
    console.log(this.contactForm.controls.email.invalid);
    if  (!this.contactForm.invalid) {
      this.showConfirmationMessage();
    } else {
      this.contactFormShowErrors = true;
    }
  }

  showConfirmationMessage() {
    this.contactFormSubmitted = true;
  }

  contactFormReset() {
    this.contactFormSubmitted = false;
    this.contactFormShowErrors = false;
    this.contactForm.reset();
  }

}
