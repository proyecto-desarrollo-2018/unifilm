import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaDetailDosComponent } from './pelicula-detail-dos.component';

describe('PeliculaDetailDosComponent', () => {
  let component: PeliculaDetailDosComponent;
  let fixture: ComponentFixture<PeliculaDetailDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaDetailDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaDetailDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
