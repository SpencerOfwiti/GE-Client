import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  date: string;

  constructor() { }

  ngOnInit(): void {
    const d = new Date();
    this.date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  }

}
