import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  loginWithGoogle() {
    window.location.replace('http://localhost:3000/auth/');
    // window.open('http://localhost:3000/auth/');
  }
}
