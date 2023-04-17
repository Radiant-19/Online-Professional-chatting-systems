import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
  test()
  {
    console.log('fuck')
  }
  ngOnInit(): void { }
  
  // Fires on button click
  onBtnClick(){
    // Navigate to /products page
    this.router.navigate(['/login']);
  }

}
