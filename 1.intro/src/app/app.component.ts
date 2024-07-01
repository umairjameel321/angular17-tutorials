import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = '1.introduction';
  myBtn: string = 'My Button';
  counter: number = 0;

  // attr binding
  isDisabled: boolean = true;
  angularImage: string = '../assets/angular17.png';

  // style binding
  bgColor: string = 'green';
  titleColor: string = 'white';
  description: string = 'font-size: 50px; color: red';

  // class binding
  redText: string = 'abc';

  incrementCouter() {
    this.counter++;
  }

  inputText: string = 'Initial Value';

  //ngClass
  message: string = 'This is a dangrous message';
  classes: string = 'danger text-size';

  //ngStyle
  selectedColor: string = 'red';
}
