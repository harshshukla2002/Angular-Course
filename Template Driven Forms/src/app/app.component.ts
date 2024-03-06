import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface userType {
  username: string;
  mail: string;
  secretQuestion: string;
  answer: string;
  gender: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  answer: string = '';
  genders: string[] = ['male', 'female'];
  user: userType = {
    username: '',
    mail: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit(form: NgForm) {
    const { userData, secret, questionAnswer, gender } = form.value;
    this.submitted = true;

    this.user.username = userData.username;
    this.user.mail = userData.email;
    this.user.secretQuestion = secret;
    this.user.answer = questionAnswer;
    this.user.gender = gender;

    this.signupForm.reset();
  }
}
