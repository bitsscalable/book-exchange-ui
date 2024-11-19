import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Library';
  sidebarVisible = false;

  constructor(private route: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
    this.title = 'People Library';
    this.router.events.subscribe(() => {
      this.sidebarVisible = this.router.url !== '/login/login';
    });
  }


}
