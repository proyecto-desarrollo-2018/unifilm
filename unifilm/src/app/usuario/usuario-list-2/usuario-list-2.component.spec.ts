import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioList2Component } from './usuario-list-2.component';

describe('UsuarioList2Component', () => {
  let component: UsuarioList2Component;
  let fixture: ComponentFixture<UsuarioList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
