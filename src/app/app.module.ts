import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { SigninComponent } from './signin/signin.component'

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, 
    children:[
      { path: 'products', component: ProductListComponent},
      { path: 'product/:id', component: ProductPageComponent},
    ] },
  { path: '', component: SigninComponent},
  { path: '**', component: SigninComponent }
  // { path: '', redirectTo: 'signin', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent,
    AuthenticatedUserComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
