import { Component, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ismenuscrolled=false;
  issidebarshowing=false;

  @HostListener('window:scroll',['$event'])
  scrollcheck()
  {
    if(window.pageYOffset>80)
      this.ismenuscrolled=true;
    else
      this.ismenuscrolled=false
    console.log(this.ismenuscrolled)
  }
  
  opensidebar()
  {
    this.issidebarshowing=true;
  }
  closesidebar()
  {
    this.issidebarshowing=false;
  }
  

}