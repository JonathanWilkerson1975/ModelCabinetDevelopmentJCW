//import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { AuthService } from './services/auth.service';

//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
//})
//export class AppComponent implements OnInit {
//  searchTerm: string = '';
//  isFooterVisible: boolean = false;

//  constructor(private authService: AuthService, private router: Router) { }

//  ngOnInit() {
//    this.authService.loadCurrentUser().subscribe();
//  }

//  onSearch() {
//    // Redirect to the Coming Soon page (ignore the search term for now)
//    this.router.navigate(['/coming-soon']);
//  }

//  toggleFooter() {
//    this.isFooterVisible = !this.isFooterVisible;
//  }
//}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  isFooterVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // Make sure loadCurrentUser() returns an Observable if you're subscribing
    this.authService.loadCurrentUser().subscribe(user => {
      console.log('Current user loaded:', user);
    });
  }

  onSearch() {
    // Always redirect to Coming Soon page
    this.router.navigate(['/coming-soon']);
  }

  toggleFooter() {
    this.isFooterVisible = !this.isFooterVisible;
  }
}
