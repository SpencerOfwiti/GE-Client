import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ge-client';
  mediaQuery = window.matchMedia('(max-width: 768px)');

  constructor() {}

  // Load resize
  onResize(e): void {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    sidebarCollapse.classList.remove('active');
    if (e.matches) {
      sidebar.classList.add('active');
      content.classList.add('active');
    } else {
      sidebar.classList.remove('active');
      content.classList.remove('active');
    }
  }

  ngOnInit(): void {
    this.mediaQuery.addListener(this.onResize);
    this.onResize(this.mediaQuery);
  }

}
