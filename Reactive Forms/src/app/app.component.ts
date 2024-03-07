import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signup: FormGroup;
  forbiddenUsernames: string[] = ['ramesh', 'ankit'];

  ngOnInit(): void {
    this.signup = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbiddenNamesValidtor.bind(this),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  onSubmit(): void {
    console.log(this.signup);
  }

  addHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signup.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signup.get('hobbies')).controls;
  }

  forbiddenNamesValidtor(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1)
      return { nameIsForbidden: true };
    return null;
  }
}
