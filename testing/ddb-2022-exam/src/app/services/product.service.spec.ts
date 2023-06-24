import {TestBed} from '@angular/core/testing';

import {ProductService} from './product.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {PRODUCTS} from "../mock-data/products";

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
   httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts should be implemented', () => {
    // simple solution
    expect(service.getProducts).toBeDefined();
    // another solution
    expect(typeof service.getProducts).toBe("function")
    // more precise solution
    expect(service.getProducts).toEqual(jasmine.any(Function));
  });

  it('should get products and products should be equal PRODUCTS', (done) => {
    service = TestBed.inject(ProductService);

    service.getProducts().subscribe(data => {
      expect(data).toEqual(PRODUCTS);
      done();
    });

    const testRequest = httpTestingController.expectOne('https://fakestoreapi.com/products');
    testRequest.flush(PRODUCTS);

  });



});
