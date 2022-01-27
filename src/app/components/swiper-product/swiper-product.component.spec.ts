import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperProductComponent } from './swiper-product.component';

describe('SwiperProductComponent', () => {
  let component: SwiperProductComponent;
  let fixture: ComponentFixture<SwiperProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
