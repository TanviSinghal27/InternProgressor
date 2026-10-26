import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  constructor(private router: Router) {}

  assignments = [
    {
      number: 1,
      title: 'Shopping Cart',
      description: 'Assignment 1: eCommerce Cart',
      icon: '🛒',
      url: 'https://your-cart-project.vercel.app',
    },
    {
      number: 2,
      title: 'Forms',
      description: 'Assignment 2: Form Development',
      icon: '📝',
      url: 'https://your-forms-project.vercel.app',
    },
    {
      number: 3,
      title: 'Assignment 3',
      description: 'Angular Practical 3',
      icon: '💻',
      url: 'https://your-assignment-3.vercel.app',
    },
    {
      number: 4,
      title: 'Assignment 4',
      description: 'Angular Practical 4',
      icon: '📚',
      url: 'https://your-assignment-4.vercel.app',
    },
    {
      number: 5,
      title: 'Assignment 5',
      description: 'Angular Practical 5',
      icon: '⚙️',
      url: 'https://your-assignment-5.vercel.app',
    },
    {
      number: 6,
      title: 'Assignment 6',
      description: 'Angular Practical 6',
      icon: '🚀',
      url: 'https://your-assignment-6.vercel.app',
    },
  ];

  logout(): void {
    sessionStorage.removeItem('portalVerified');
    this.router.navigate(['/']);
  }
}
