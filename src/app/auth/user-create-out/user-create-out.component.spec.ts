import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateOutComponent } from './user-create-out.component';

describe('UserCreateOutComponent', () => {
  let component: UserCreateOutComponent;
  let fixture: ComponentFixture<UserCreateOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
