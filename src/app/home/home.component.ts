import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
