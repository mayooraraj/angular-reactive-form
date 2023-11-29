import { Component,OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      publication: ['', Validators.required],
      price: ['', Validators.required],
      genre: ['', Validators.required],
      publishedDate: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      this.bookForm.reset();
    }

}
}