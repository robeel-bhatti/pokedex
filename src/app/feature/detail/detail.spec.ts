import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetail } from './detail';

describe('Detail', () => {
  let component: PokemonDetail;
  let fixture: ComponentFixture<PokemonDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
