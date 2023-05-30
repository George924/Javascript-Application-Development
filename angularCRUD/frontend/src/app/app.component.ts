import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ApiComponent  {
  constructor(private apiService:ApiService) {}

  ngOnInit(): void{
    this.apiService.readUsers()
  }
  title = 'frontend';
}
