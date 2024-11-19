import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardServiceService } from '../../../modules/dashboard/dashboard-service.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit{
  sidebarVisible : boolean = false;
  username!:any;

constructor(private route: ActivatedRoute, private router: Router, private dashboardService : DashboardServiceService){

}
navItems: any;

  ngOnInit(): void {
    
    
    this.router.events.subscribe(() => {
      this.sidebarVisible = !(this.router.url === '/login/login' || this.router.url === '/signup' ||
         this.router.url.includes('/signup-user') || this.router.url.includes('/resetPassword') ||this.router.url.includes('/verificationFailed'));
      
      
    });
    console.log('sessionStorage.getItem()',sessionStorage.getItem('username'))
    if(sessionStorage.getItem('username') === null && !this.sidebarVisible){
      this.dashboardService.getUserName().subscribe(res=>{
        sessionStorage.setItem('username',res);
        this.username = res;
      })
    }else{
      this.username = sessionStorage.getItem('username');
    }
    this.navItems= [
      { name: 'Dashboard', route: '/dashboard', icon: 'dashboard', call:'' },
      { name: 'Books', route: '/books', icon: 'books', call:'' },
      { name: 'Requests', route: '/requests', icon: 'pending',call:'' },
      // { name: 'Settings', route: '/settings', icon: 'settings',call:'' },
      // { name: 'Support', route: '/support', icon: 'contact_support',call:'' },
      { name: 'Signout', route: '/login', icon: 'logout',call:'logout()'},
    ];
    
  }
  badgevisible = false;

  badgevisibility() {
    this.badgevisible = true;
  }

  logout(){
    if(sessionStorage.getItem('token')){
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
    }
    this.router.navigate(['/login'])
  }


}
function res(value: Object): void {
  // throw new Error('Function not implemented.');
}

