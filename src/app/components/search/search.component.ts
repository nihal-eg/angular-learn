import { Component, Output, EventEmitter} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>()

  onSearch() {
    console.log("searchhh");
    this.search.emit(this.text);
  }
  text = "";
  inputChange(event: any) {
    console.log("on change triggered", event.target.value);
    this.text = event.target.value;
  }
}