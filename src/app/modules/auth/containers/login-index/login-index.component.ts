import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss'],
})
export class LoginIndexComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.router.navigate(['/movement']);
    }
  }

  public authenticate(event: AuthModel): void {
    this.authService.login(event).subscribe({
      next: (rm: any) => {
        localStorage.setItem('access_token', rm.access_token);
        localStorage.setItem('username', rm.username);
        Swal.fire({
          title: 'Successful login',
          icon: 'success',
        }).then(() => this.router.navigate(['/movement']));
      },
      error: (err) => {
        const error: any = err.error;
        Swal.fire({
          title: 'Bad credentials, please try again',
          text: error.message,
          icon: 'warning',
        });
      },
    });
  }
}
