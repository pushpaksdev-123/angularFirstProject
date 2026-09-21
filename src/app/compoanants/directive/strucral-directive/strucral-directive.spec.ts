import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrucralDirective } from './strucral-directive';

describe('StrucralDirective', () => {
  let component: StrucralDirective;
  let fixture: ComponentFixture<StrucralDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrucralDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(StrucralDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
