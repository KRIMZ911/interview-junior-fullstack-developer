import { Component } from '@angular/core';
import { Search } from './search';
import { SearchService } from './search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _searchService: SearchService) {}

  userModel = new Search("Berlin");
  submitted = false;
  onSubmit(){
    this.submitted = true;
    this._searchService.search(this.userModel).subscribe(
      data => console.log("Success!", data),
      error => console.log("Something went wroong!", error)
    )
  }

}