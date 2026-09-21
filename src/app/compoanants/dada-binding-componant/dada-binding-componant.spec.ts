import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadaBindingComponant } from './dada-binding-componant';

describe('DadaBindingComponant', () => {
  let component: DadaBindingComponant;
  let fixture: ComponentFixture<DadaBindingComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadaBindingComponant],
    }).compileComponents();

    fixture = TestBed.createComponent(DadaBindingComponant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
