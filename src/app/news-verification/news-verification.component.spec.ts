import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsVerificationComponent } from './news-verification.component';

describe('NewsVerificationComponent', () => {
  let component: NewsVerificationComponent;
  let fixture: ComponentFixture<NewsVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsVerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
