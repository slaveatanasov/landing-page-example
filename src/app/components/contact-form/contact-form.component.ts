import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  messageBox: any = {};

  constructor() { }

  ngOnInit() {
  }

  formSent() {
    window.alert('Message sent. Thank you for reaching out to us!')
  }

}
