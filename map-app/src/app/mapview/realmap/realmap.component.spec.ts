import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmapComponent } from './realmap.component';

describe('RealmapComponent', () => {
  let component: RealmapComponent;
  let fixture: ComponentFixture<RealmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealmapComponent]
    });
    fixture = TestBed.createComponent(RealmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
