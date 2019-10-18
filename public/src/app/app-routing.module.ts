import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: 'products', component: IndexComponent},
  { path: 'product/new', component: NewComponent },
  { path: 'edit/:id', component: UpdateComponent },
  { path: 'show/:id', component: ProductComponent },
  { path: '**', component: IndexComponent },
  { path: '', pathMatch: 'full', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
