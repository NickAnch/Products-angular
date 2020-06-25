import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@admin-services';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

  constructor(
    private router: Router,
    public auth: AuthService,
  ) { }

  public logout(event: Event): void {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }

}
