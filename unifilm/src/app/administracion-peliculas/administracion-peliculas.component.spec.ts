import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionPeliculasComponent } from './administracion-peliculas.component';

describe('AdministracionPeliculasComponent', () => {
  let component: AdministracionPeliculasComponent;
  let fixture: ComponentFixture<AdministracionPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
