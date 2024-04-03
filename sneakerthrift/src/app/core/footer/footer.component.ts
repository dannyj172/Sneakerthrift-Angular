import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser'
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  domains = EMAIL_DOMAINS;
  buttonText:string = 'Submit'
  removeJoinInput:boolean = false;

  changeButtonText() {
    this.buttonText='Sending...'
  }

  sendEmail(form:NgForm) {

    if (form.invalid) {
      return;
    }

    const { user_email } = form.value;


    emailjs.send('service_z3t8a2nn', 'template_172382341231', {user_email: user_email} , 'JB9zZW5YUBkCck2gK')
    form.reset()
    setTimeout(() => {
      this.removeJoinInput = true;
    }, 1000);
  }

}
