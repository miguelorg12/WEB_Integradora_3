import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVerificacionComponent } from './code-verificacion.component';

describe('CodeVerificacionComponent', () => {
  let component: CodeVerificacionComponent;
  let fixture: ComponentFixture<CodeVerificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeVerificacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeVerificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
