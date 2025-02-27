import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // <-- IMPORTANT
import { AuthService } from './services/auth.service'; // or correct path

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
    this.authService.loadCurrentUser().subscribe();
  }

  onSearch() {
    this.router.navigate(['/coming-soon'], { queryParams: { q: this.searchTerm || '' } });
  }

  toggleFooter() {
    this.isFooterVisible = !this.isFooterVisible;
  }
}
