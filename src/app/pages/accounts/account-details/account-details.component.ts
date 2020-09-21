import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  date: string;
  time: number;
  isChecked = false;
  numberChecked = 0;
  isDisbursing = false;

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      paging: true,
      pagingType: 'full_number',
      pageLength: 5,
      processing: true
    };
    this.dtTrigger.next();
    const d = new Date();
    this.date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
    this.time = Date.now();
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

  addTransfer(): void {
    this.isDisbursing = true;
  }

}
