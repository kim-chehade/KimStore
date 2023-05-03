import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {
  cardform: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cardform = this.fb.group({
      cardname: ['', Validators.required],
      cardnumber: ['', Validators.required],
      date: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.cardform.invalid) {
      return;
    } else {
      alert('You will receive your order in 10 days.');
    }
  }
}
