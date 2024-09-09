import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiPage } from './mi.page';

describe('MiPage', () => {
  let component: MiPage;
  let fixture: ComponentFixture<MiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
