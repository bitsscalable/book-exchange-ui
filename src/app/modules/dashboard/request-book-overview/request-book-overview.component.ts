import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-request-book-overview',
  templateUrl: './request-book-overview.component.html',
  styleUrl: './request-book-overview.component.css'
})
export class RequestBookOverviewComponent {
  @Input() borrowedBooksCount=0
}
