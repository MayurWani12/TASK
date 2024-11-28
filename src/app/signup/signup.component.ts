import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

// users:any={
// fullname:'',
// email:'',
// password:''
// }

 users:User=new User();

constructor( private router:Router){}

signup(){
  if(this.users.fullname&&this.users.email&&this.users.password)
  {
    localStorage.setItem('Userdata',JSON.stringify(this.users));
this.users={fullname:'',email:'',password:''};

    alert("signup Success");
    this.router.navigate(['/login']);
  }

  else{
    alert("fill the all field");
  }


}

// constructor(private http:HttpClient,private router:Router){}
// signup() {
  // Check if all fields are filled
  // if (this.users.fullname && this.users.email && this.users.password) {
    // The URL for the backend API endpoint
    // const url = "";
    
    // Make the HTTP POST request to send the user data
  //   this.http.post(url, this.users).subscribe(
  //     (response) => {
  //       // If the signup is successful, handle the response
  //       console.log('Response:', response);
  //       alert('Sign-up successful!');  // Notify user
  //       this.router.navigate(['/login']);  // Redirect to login page after sign-up
  //     },
  //     (error) => {
  //       // Handle error in case the request fails
  //       console.error('Error:', error);
  //       alert('Something went wrong. Please try again later.');
  //     }
  //   );
  // } else {
  //   alert('Please fill in all fields.');
  // }


// this.http.post(url,this.users).subscribe((res:any)=>{
// if(res.result){
//   alert("log success");
// }else{
//   alert("not login");
// }


// });
//   }
// }
}

