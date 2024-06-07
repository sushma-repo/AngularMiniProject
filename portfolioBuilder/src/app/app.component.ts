import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgFor,NgIf,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolioBuilder';
  nm='';
  em='';
  ph='';
  add='';
  submitted : boolean =false;
  showHeading = true;

  qualification=[ {school : '',degree : '', year:''}];

  addQualification(){
    this.qualification.push({school : '',degree : '', year:''});
  }

  submit(){
    this.submitted=true;
    this.showHeading=false;
  }

  edit(){
    this.submitted=false;
    this.showHeading=true;
  }
}
