import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableHeadlinesComponent } from './reusable-headlines.component';

describe('ReusableHeadlinesComponent', () => {
  let component: ReusableHeadlinesComponent;
  let fixture: ComponentFixture<ReusableHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableHeadlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
