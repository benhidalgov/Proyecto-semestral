import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPage } from './mis.page';

describe('MisPage', () => {
  let component: MisPage;
  let fixture: ComponentFixture<MisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
