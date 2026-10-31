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
      description: 'Assignment 1: E-Commerce Cart',
      icon: '🛒',
      url: 'https://shopping-app-peach-xi.vercel.app/',
    },
    {
      number: 2,
      title: 'Help Desk',
      description: 'Assignment 2: Form Development',
      icon: '📝',
      url: 'https://help-desk-mu-three.vercel.app/',
    },
    {
      number: 3,
      title: 'Team Grid',
      description: 'Assignment 3: Angular Pages Development ',
      icon: '👥',
      url: 'https://team-grid-eight.vercel.app/',
    },
    {
      number: 4,
      title: 'User-Hub',
      description: 'Assignment 4: API Integration & CRUD',
      icon: '👤',
      url: 'https://user-hub-smoky.vercel.app/',
    },
    {
      number: 5,
      title: 'Team-Grid Enhanced',
      description: 'Assignment 5: Search and Filter',
      icon: '👥︂',
      url: 'https://team-grid-eight.vercel.app/',
    },
    {
      number: 6,
      title: 'Sign-Up Form',
      description: 'Assignment 6: Reactive Forms',
      icon: '📝👤',
      url: 'https://sign-up-form-ten-ivory.vercel.app/',
    },
    {
      number: 7,
      title: 'Item Nest',
      description: 'Assignment 7: Angular Service Assignment',
      icon: '🛒🛍️',
      url: 'https://item-nest.vercel.app/',
    },
    {
      number: 8,
      title: 'Inventory Hub',
      description: 'Assignment 8: Mini Inventory Management',
      icon: '🏛',
      url: 'https://inventory-hub-tan-nine.vercel.app/',
    },
  ];

  logout(): void {
    sessionStorage.removeItem('portalVerified');
    this.router.navigate(['/']);
  }
}
