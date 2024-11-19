import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface genre {
  name: string,
  code: string
}

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent implements OnInit {
  @Input() addBookForm !: FormGroup;

  value : String | undefined;
  genres!: genre[];

  selectedGenres!: genre[];

  ngOnInit() {
      this.genres = [
          { name: 'Horrer', code: 'HR' },
          { name: 'Rom-Com', code: 'RC' },
          { name: 'Fiction', code: 'FI' },
          { name: 'Fantacy', code: 'FA' },
          { name: 'Scifi', code: 'SF' },
          { name: 'Non-Fiction', code: 'NF' },
      ];
  }
}

