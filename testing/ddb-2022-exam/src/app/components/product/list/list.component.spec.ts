import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListComponent} from './list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ProductService} from "../../../services/product.service";
import {ProductServiceStub} from "../../../stubs/product.service.stub";
import {ItemComponent} from "../item/item.component";
import {NgOptimizedImage} from "@angular/common";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, ItemComponent],
      imports: [HttpClientTestingModule, NgOptimizedImage],
      providers: [
        {provide: ProductService, useClass: ProductServiceStub}
      ]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all products', () => {
    spyOn(component, 'getProducts').and.callThrough();
    component.ngOnInit();
    expect(component.getProducts).toHaveBeenCalled();
    expect(component.products$).toBeTruthy();
  });

  it('length should be 20', () => {
    spyOn(component, 'getProducts').and.callThrough();
    component.ngOnInit();

    expect(component.getProducts).toHaveBeenCalled();
    expect(component.products$).toBeTruthy();

    component.products$?.subscribe((products) => {
      expect(products.length).toBe(20);
    });

  });


});
