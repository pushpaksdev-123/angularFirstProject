import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Forandswitch } from './forandswitch';

describe('Forandswitch', () => {
  let component: Forandswitch;
  let fixture: ComponentFixture<Forandswitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forandswitch],
    }).compileComponents();

    fixture = TestBed.createComponent(Forandswitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
