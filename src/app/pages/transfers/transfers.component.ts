import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isChecked = false;
  numberChecked = 0;

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      paging: true,
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  countChecked(event): void {
    if (event.target.checked) {
      this.numberChecked++;
    } else {
      this.numberChecked--;
    }
  }

  checkUncheckAll(): void {
    if (this.isChecked === true) {
      this.isChecked = false;
      this.numberChecked = 0;
    } else {
      this.isChecked = true;
      this.numberChecked = 12;
    }
  }
}
