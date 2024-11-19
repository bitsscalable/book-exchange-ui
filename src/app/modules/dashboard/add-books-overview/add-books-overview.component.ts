import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-books-overview',
  templateUrl: './add-books-overview.component.html',
  styleUrl: './add-books-overview.component.css'
})
export class AddBooksOverviewComponent {
  @Input() addedBooksCount=0;
}
