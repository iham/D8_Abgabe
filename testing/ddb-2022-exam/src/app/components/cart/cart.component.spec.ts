import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import {PRODUCTS} from "../../mock-data/products";

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [],
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the cart', function () {
    spyOn(component, 'toggleCart').and.callThrough();
    // default is false
    expect(component.visible).toBeFalse();
    // toggle cart to be true
    component.toggleCart();
    // visible is now true
    expect(component.visible).toBeTrue();
    component.toggleCart();
    // visible is now false again
    expect(component.visible).toBeFalse();
  });

});
