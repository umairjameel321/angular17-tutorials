import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectsComponent } from './about-projects.component';

describe('AboutProjectsComponent', () => {
  let component: AboutProjectsComponent;
  let fixture: ComponentFixture<AboutProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
