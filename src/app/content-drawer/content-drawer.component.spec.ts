import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDrawerComponent } from './content-drawer.component';

describe('ContentDrawerComponent', () => {
  let component: ContentDrawerComponent;
  let fixture: ComponentFixture<ContentDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
