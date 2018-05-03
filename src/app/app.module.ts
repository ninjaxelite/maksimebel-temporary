import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PresentationService } from './presentation/presentation.service';
import { TextbarComponent } from './shared/textbar/textbar.component';
import { ProductComponent } from './shared/product/product.component';
import { ProductsComponent } from './products/products.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ArticlesComponent } from './articles/articles.component';

export const API_URL: String = "http://localhost:8080/";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PresentationComponent,
    TextbarComponent,
    ProductComponent,
    ProductsComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2CarouselamosModule
  ],
  providers: [PresentationService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
