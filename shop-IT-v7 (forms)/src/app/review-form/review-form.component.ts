import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  isOpen = false
  reviewForm: any;

  @Output() submit = new EventEmitter()

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      stars: ['5'],
      author: ['', [Validators.required]],
      body: ['', Validators.required]
    })
  }

  toggle() {
    this.isOpen = !this.isOpen
  }

  handleForm(event: any) {
    event.stopPropagation();
    if (this.reviewForm.valid) {
      let formData = this.reviewForm.value
      this.submit.emit(formData)
      this.reviewForm.reset()
      this.toggle();
    }
  }

}
