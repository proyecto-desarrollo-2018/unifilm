import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaListDosComponent } from './pelicula-list-dos.component';

describe('PeliculaListDosComponent', () => {
  let component: PeliculaListDosComponent;
  let fixture: ComponentFixture<PeliculaListDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaListDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaListDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
