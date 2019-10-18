import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  constructor(
    private http: HttpService) { }

  products: any = [];

  ngOnInit() {
    console.log('INDEX IS RUNNING!');
    this.getAllProducts();
  }


  getAllProducts() {
    let obs = this.http.getAll();
    obs.subscribe(data => {
      if (data['errorMsg']) {
        console.log(data["data"])
        //other logic
      } else {
        this.products = data['data'];
        // for (let x of this.myobjects) {
        //   let counter = 0
        //   for (let y of x.reviews) {
        //     counter += y.rating
        //   }
        //   x.average = counter / x.reviews.length
        // }
      }
    })
  }



  // getAllProducts() {
  //   const observable = this.http.getAll();
  //   observable.subscribe((data: any) => {
  //     this.products = data;
  //     console.log(data);
  //   });
  // }

  // deleteProduct(id) {
  //   const observable = this.http.deleteById(id);
  //   observable.subscribe((data: any) => {
  //     console.log(data);
  //     this.getAllProducts();
  //   });
  // }
}
