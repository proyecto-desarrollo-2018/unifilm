import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaListTresComponent } from './pelicula-list-tres.component';

describe('PeliculaListTresComponent', () => {
  let component: PeliculaListTresComponent;
  let fixture: ComponentFixture<PeliculaListTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaListTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaListTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
