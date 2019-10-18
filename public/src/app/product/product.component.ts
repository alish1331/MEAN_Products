import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  Product: any = {
    title: '',
    qty: '',
    price: ''
  };

  ngOnInit() {
    this.getOneProduct();

  }

  getOneProduct() {
    // tslint:disable-next-line: no-shadowed-variable
    const observable = this.http.getById(this.route.snapshot.params.id);
    observable.subscribe(data => {
      console.log(data);
      this.Product = data;
      // let counter = 0
      // for (let x of this.Product.reviews) {
      //   counter += x.rating
      // }
      // this.Product.average = counter / this.Product.reviews.length
    });
  }

  deleteProduct(id) {
    // tslint:disable-next-line: no-shadowed-variable
    const observable = this.http.deleteById(id);
    observable.subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/index']);
    });
  }
}

