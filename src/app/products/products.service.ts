import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Product } from "../shared/product/product";
import { AppModule, API_URL } from "../app.module";

@Injectable()
export class ProductsService {



    constructor(private http: HttpClient) { }

    getPresentationData() {

    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(API_URL + "getProducts");
    }
}