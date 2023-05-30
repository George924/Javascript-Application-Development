import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:user[] = [];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.readUsers().subscribe((users:User[])=>{
      this.users = users['users'];
    })
  }

}
