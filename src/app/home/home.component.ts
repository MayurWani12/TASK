import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Use } from '../use';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { User } from '../user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  
  user : any [] = [];

constructor(private router:Router,private http:HttpClient){}
loadUser(): void {
  const url = 'https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers';
  this.http.get(url).subscribe((response: any) => {
    // Assuming response.result contains the array of users
    if (response && response.result) {
      this.user = response.result; // Populate the user array with the fetched data
    } else {
      console.error('No valid data in response');
    }
  }, error => {
    console.error('Error fetching users:', error);
  });
}
}