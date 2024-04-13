import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyInformacionComponent } from './baby-informacion.component';

describe('BabyInformacionComponent', () => {
  let component: BabyInformacionComponent;
  let fixture: ComponentFixture<BabyInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BabyInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BabyInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
