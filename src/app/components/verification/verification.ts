import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-verification',
  styleUrl: './verification.css',
  templateUrl: './verification.html',
})
export class Verification {
  accessCode: string = '';
  errorMessage: string = '';

  private readonly correctCode = '1234';

  constructor(private router: Router) {}

  verifyCode(): void {
    this.errorMessage = '';

    if (!/^\d{4}$/.test(this.accessCode)) {
      this.errorMessage = 'Please enter a valid 4-digit code.';
      return;
    }

    if (this.accessCode === this.correctCode) {
      sessionStorage.setItem('portalVerified', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Incorrect access code. Please try again.';
    }
  }
}
