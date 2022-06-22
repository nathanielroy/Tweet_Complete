import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMyTweetsComponent } from './modify-my-tweets.component';

describe('ModifyMyTweetsComponent', () => {
  let component: ModifyMyTweetsComponent;
  let fixture: ComponentFixture<ModifyMyTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyMyTweetsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMyTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
