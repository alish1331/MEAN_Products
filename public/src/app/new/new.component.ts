import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private http: HttpService,
    private router: Router) { }

  newProduct: any = {
    title: '',
    qty: '',
    price: ''
  };

  resetting: any = {
    title: '',
    qty: '',
    price: ''
  };

  // to show or hide errors if any
  hasErrors = false;
  errors: any = [];

  // Holds all db calls made
  products: any = [];

  ngOnInit() {
    console.log('NEW IS RUNNING!');
  }

  submitProduct() {
    const observable = this.http.createProduct(this.newProduct);
    observable.subscribe((data: any) => {
      console.log(data);
      if (data.message === 'fail') {
        this.errors = this.errorHelper(data.err.errors);
      } else {
        this.errors = [];
        this.newProduct = {
          name: ''
        };
        this.router.navigate(['/index']);
      }
    });
  }

  errorHelper(errorMessage: any) {
    const errorArr = [];
    // tslint:disable-next-line: forin
    for (const error in errorMessage) {
      console.log(errorMessage[error].message);
      errorArr.push({ path: errorMessage[error].path, message: errorMessage[error].message });
    }
    return errorArr;
  }

  reset() {
    this.newProduct = this.resetting;
  }
}
