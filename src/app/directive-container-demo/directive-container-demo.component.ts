import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-container-demo',
  templateUrl: './directive-container-demo.component.html',
  styleUrls: ['./directive-container-demo.component.css']
})
export class DirectiveContainerDemoComponent implements OnInit {

  users: { username: string, isBanned: boolean }[] = [
    { username: "galaxy123", isBanned: false },
    { username: "Atom", isBanned: true },
    { username: "angular-user", isBanned: false },
    { username: "test321", isBanned: true },
  ];

  selectedUser!: { username: string, isBanned: boolean };
  filterBanned: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
