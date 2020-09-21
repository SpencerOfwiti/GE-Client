import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportAccountsComponent } from './export-accounts.component';

describe('ExportAccountsComponent', () => {
  let component: ExportAccountsComponent;
  let fixture: ComponentFixture<ExportAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
