import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
  ngOnInit(): void { }
  
  // Fires on button click
  onBtnClick(){
    // Navigate to /products page
    this.router.navigate(['/signin']);
  }
  dashboard()
  {
    this.router.navigate(['/dashboard'])
  }

}
