import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[] = [];
  selectUser: User = {id: 0, nume: '', prenume:'', email:'',datanastere:new Date(), telefon''};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  
}

createUpdateUser(form: {value: User;}) {
  if (this.selectedUser && this.selectUser.id) {
    this.apiService.updateUser(this.slectedUSer.id,form.value). subscribe((user:User) => {
      //this.readUSers();
      console.log('User updated', user);
    });
    else {
      this.apiService.createUser(form.value).subscribe((user: User) => )
    }
  }
}
