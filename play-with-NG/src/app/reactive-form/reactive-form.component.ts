import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  form: FormGroup = this.fb.group({
    courseTitle: ['', Validators.required],
    lessons: this.fb.array([])
  })

  get lessons() {
    return this.form.controls['lessons'] as FormArray
  }

  addLesson() {
    const lessonForm: FormGroup = this.fb.group({
      title: ['', Validators.required],
      level: ['easy', Validators.required]
    })
    this.lessons.push(lessonForm)
  }

  deleteLesson(lessonIndex: number, event: any) {
    event.preventDefault()
    this.lessons.removeAt(lessonIndex);
  }


  handleSubmit() {
    const course = this.form.value;
    console.log(course);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
