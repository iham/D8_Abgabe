import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import {NgOptimizedImage} from "@angular/common";
import {PRODUCTS} from "../../../mock-data/products";

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      imports: [NgOptimizedImage],
    });
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should add to cart', () => {
    spyOn(component, 'addToCart').and.callThrough();
    component.addToCart(PRODUCTS[0]);
    expect(component.addToCart).toHaveBeenCalled();
  });

});
