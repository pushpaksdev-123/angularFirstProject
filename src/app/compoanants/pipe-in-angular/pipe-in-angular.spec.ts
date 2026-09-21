import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipeInAngular } from './pipe-in-angular';

describe('PipeInAngular', () => {
  let component: PipeInAngular;
  let fixture: ComponentFixture<PipeInAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeInAngular],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeInAngular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
