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
          { name: 'Horrer', code: 'NY' },
          { name: 'Rom-Com', code: 'RM' },
          { name: 'Fiction', code: 'LDN' },
          { name: 'Fantacy', code: 'IST' },
          { name: 'Scifi', code: 'PRS' }
      ];
  }
}

