export class Use {
    userId: number | string;  // Depending on your API response, this could be a string or a number
  userName: string;
  emailId: string;
  fullName: string;
  role: string;
  createdDate: string | Date;  
  password: string;
  projectName: string;
  refreshToken: string;
  refreshTokenExpiryTime: string | Date;


  constructor(){


    this.userId='';
    this.userName='';
    this.emailId='';
    this.fullName='';
    this.role='';
    this.createdDate='';
    this.password='';
    this.projectName='';
    this.refreshToken='';
    this.refreshTokenExpiryTime='';
  }

}

