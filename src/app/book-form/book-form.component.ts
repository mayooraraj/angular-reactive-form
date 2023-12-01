import { Component,OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http'; //n

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  statusMessage!: string;
  responseData: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

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

      const bookData = this.bookForm.value;

      // Send HTTP request to create a new record
      this.http.post('http://localhost:3000/api/books', bookData)
        .subscribe(
          (response) => {
            this.statusMessage = 'Success';
            this.responseData = response;
            console.log('New book record created:', response);
          },
          (error) => {
            this.statusMessage = 'Error';
            console.error('Error creating book record:', error);
          }
        );
    }
  }

      // this.bookForm.reset();
}
