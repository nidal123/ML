import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NLPComponent } from './nlp.component';

describe('NLPComponent', () => {
  let component: NLPComponent;
  let fixture: ComponentFixture<NLPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NLPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
