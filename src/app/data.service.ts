import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "./model/product";

@Injectable()
export class DataService {

  private data_url: string = "./assets/data/data.json";

  constructor(private http: HttpClient) {

  }

  getDetails() {
    return this.http.get<Product[]>(this.data_url);
  }

}
