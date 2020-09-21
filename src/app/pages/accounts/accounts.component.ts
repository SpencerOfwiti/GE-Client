import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isChecked = false;
  numberChecked = 0;
  isDisbursing = false;

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      paging: true,
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
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

  addTransfer(): void {
    this.isDisbursing = true;
  }
}
