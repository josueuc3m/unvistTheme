import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCMinputTextComponent } from './tcminput-text.component';

describe('TCMinputTextComponent', () => {
  let component: TCMinputTextComponent;
  let fixture: ComponentFixture<TCMinputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TCMinputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TCMinputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
