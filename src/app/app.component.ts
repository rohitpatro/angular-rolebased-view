import { Component } from '@angular/core';
import { NgxPermissionsService } from "ngx-permissions";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";
import { Product } from "./model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  url: string = "./assets/data/permission.json";
  products: Product[];
  permissions$;


  constructor(private permissionsService: NgxPermissionsService,
              private dataService: DataService,
              private http: HttpClient) {

  }

  ngOnInit(): void {
    const perm = ["ADMIN", "CUSTOMER"];

    this.permissionsService.loadPermissions(perm);
    this.dataService.getDetails().subscribe(data => {
      this.products = data;
    });


    this.http.get(this.url).subscribe((permissions) => {
      this.permissionsService.loadPermissions(["ADMIN", "EDITOR"]);
    })
  }

  addRole(role) {
    if (role !== undefined || role !== '' || role !== null) {
      this.permissionsService.addPermission(role.toLocaleUpperCase());
    }

  }

  deleteRole(role) {
    this.permissionsService.removePermission(role.toLocaleUpperCase());
  }

  deleteAllRole() {
    this.permissionsService.flushPermissions();
  }
}
