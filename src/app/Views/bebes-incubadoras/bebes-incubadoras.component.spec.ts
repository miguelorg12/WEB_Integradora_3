import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebesIncubadorasComponent } from './bebes-incubadoras.component';

describe('BebesIncubadorasComponent', () => {
  let component: BebesIncubadorasComponent;
  let fixture: ComponentFixture<BebesIncubadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BebesIncubadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BebesIncubadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
