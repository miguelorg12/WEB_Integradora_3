import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarIncubadoraBebeComponent } from './asignar-incubadora-bebe.component';

describe('AsignarIncubadoraBebeComponent', () => {
  let component: AsignarIncubadoraBebeComponent;
  let fixture: ComponentFixture<AsignarIncubadoraBebeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarIncubadoraBebeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignarIncubadoraBebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
