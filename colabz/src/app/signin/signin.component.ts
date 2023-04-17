import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private router: Router) { }
  ngOnInit(): void { }
  
  // Fires on button click
  onBtnClick1(){
    // Navigate to /products page
    this.router.navigate(['/login']);
  }
  dashboard(){
    this.router.navigate(['/dashboard']);
  }

}
