import { Component } from '@angular/core';


export interface PeriodicElement {
  condition: string;
  title: number;
  deliverable: number;
  pincode: string;
}

const data: PeriodicElement[] = [
  {title: 1, condition: 'Hydrogen', deliverable: 1.0079, pincode: 'H'},
  {title: 2, condition: 'Helium', deliverable: 4.0026, pincode: 'He'},
  {title: 3, condition: 'Lithium', deliverable: 6.941, pincode: 'Li'},
  {title: 4, condition: 'Beryllium', deliverable: 9.0122, pincode: 'Be'},
  {title: 5, condition: 'Boron', deliverable: 10.811, pincode: 'B'},
  {title: 6, condition: 'Carbon', deliverable: 12.0107, pincode: 'C'},
  {title: 7, condition: 'Nitrogen', deliverable: 14.0067, pincode: 'N'},
  {title: 8, condition: 'Oxygen', deliverable: 15.9994, pincode: 'O'},
  {title: 9, condition: 'Fluorine', deliverable: 18.9984, pincode: 'F'},
  {title: 10, condition: 'Neon', deliverable: 20.1797, pincode: 'Ne'},
];


@Component({
  selector: 'app-resolved-tickets',
  templateUrl: './resolved-tickets.component.html',
  styleUrl: './resolved-tickets.component.css'
})
export class ResolvedTicketsComponent {
  displayedColumns: string[] = ['title', 'condition', 'deliverable', 'pincode'];
  data = data;
  clickedRows = new Set<PeriodicElement>();

}
