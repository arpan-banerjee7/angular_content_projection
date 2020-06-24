import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionTemplateComponent } from './expansion-template.component';

describe('ExpansionTemplateComponent', () => {
  let component: ExpansionTemplateComponent;
  let fixture: ComponentFixture<ExpansionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
