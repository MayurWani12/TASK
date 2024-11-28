import { Component, Injectable } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { User } from '../user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

// user:any={
// email:'',
// password:''
// }

user:User=new User();

constructor(private http:HttpClient,private router:Router){}

log(){
const storeduser=JSON.parse(localStorage.getItem('Userdata') || '{}')

if( this.user.email==storeduser.email && this.user.password==storeduser.password ){
  alert("login success");
  this.router.navigate(['/home']);

 
}
else{
    alert("invalid");
}

}
// isLoading: boolean = false;

// log(){

  
//   if (this.user.email && this.user.password) {
//     this.isLoading = true;  
 
//     const url = "";
//     this.http.post(url, this.user).subscribe(
//       (response: any) => {
   
//         console.log('Login response:', response);

      
//         if (response.success) {
//           alert('Login successful');
//           this.router.navigate(['/dashboard']);  
//         } else {
          
//           alert('Invalid login credentials');
//         }

//         this.isLoading = false;  
//       },
//       (error) => {
  
//         console.error('Login error:', error);
//         this.isLoading = false;  
//         alert('Login failed. Please check your credentials and try again.');
//       }
//     );
//   } else {
//     alert('Please enter both email and password');
//   }
// }
}