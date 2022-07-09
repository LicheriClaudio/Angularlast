import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralcompComponent } from './generalcomp.component';

describe('GeneralcompComponent', () => {
  let component: GeneralcompComponent;
  let fixture: ComponentFixture<GeneralcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
