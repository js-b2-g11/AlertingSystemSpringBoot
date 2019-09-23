import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedLayoutComponent } from './bed-layout.component';

describe('BedLayoutComponent', () => {
  let component: BedLayoutComponent;
  let fixture: ComponentFixture<BedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
