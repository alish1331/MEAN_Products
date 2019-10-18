import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  editProduct: any = {
    title: '',
    qty: '',
    price: ''
  };

  editId: any;

  hasErrors = false;
  errors: any = [];


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.findById(params['id']);
    });
  }

  findById(id) {
    const observable = this.http.getById(id);
    observable.subscribe((data: any) => {
      // console.log(data);
      this.editProduct = data;
    });
  }

  updateProduct(id, product) {
    const observable = this.http.updateById(product);
    observable.subscribe((data: any) => {
      // console.log(data);
      if (data.message === 'fail') {
        this.errors = this.errorHelper(data.err.errors);
        // console.log(this.errors);
      } else {
        this.errors = [];
        this.editProduct = data;
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

}
