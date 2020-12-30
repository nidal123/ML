import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprocComponent } from './improc.component';

describe('ImprocComponent', () => {
  let component: ImprocComponent;
  let fixture: ComponentFixture<ImprocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
