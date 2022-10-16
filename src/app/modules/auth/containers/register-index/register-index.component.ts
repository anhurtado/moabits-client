import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/core/models/register.model';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-index',
  templateUrl: './register-index.component.html',
  styleUrls: ['./register-index.component.scss'],
})
export class RegisterIndexComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.router.navigate(['/movement']);
    }
  }

  public register(event: RegisterModel): void {
    this.authService.register(event).subscribe({
      next: (rm: any) => {
        Swal.fire({
          title: 'Successful register',
          icon: 'success',
        }).then(() => this.router.navigate(['/auth/login']));
      },
      error: (err) => {
        const error: any = err.error;
        Swal.fire({
          title: 'Ups something happened, please try again',
          text: error.message,
          icon: 'warning',
        });
      },
    });
  }
}
