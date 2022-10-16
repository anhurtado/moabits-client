import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './interceptors/error.interceptor';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { TitleGuard } from './guards/title.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    TitleGuard,
    AuthService,
  ],
})
export class CoreModule {}
