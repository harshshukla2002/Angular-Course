import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  onlyOdd = false;
  evenNumbers = [1, 2];
  oddNumbers = [1, 3, 5];

  ngOnInit(): void {
    console.log(this.onlyOdd);
  }
}
