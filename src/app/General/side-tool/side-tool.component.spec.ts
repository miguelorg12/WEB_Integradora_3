import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideToolComponent } from './side-tool.component';

describe('SideToolComponent', () => {
  let component: SideToolComponent;
  let fixture: ComponentFixture<SideToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
