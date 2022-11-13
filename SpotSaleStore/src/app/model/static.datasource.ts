import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product("63686f3bf815940658985e1b",
        "SpotSale",
        "Nike Tiempo Legend 8 Elite MI SG-Pro Anti-Clog Traction",
        "Brand new",
        "Brand new",
        [""],
        340,
        false,
        false,
        "meet in-person",
        "2022-11-07T02:39:12.542Z",
        "2022-11-10T00:00:00.000Z",
        "2022-11-17T00:00:00.000Z",
        "Eric Young",
        [{question: "123", answer:"clay"}]
)
        // new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        // new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
        // new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
        // new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
        // new Product(5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
        // new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
        // new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
        // new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
        // new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
        // new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
        // new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
        // new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
        // new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
        // new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
        // new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
    ];
    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
    saveProduct(product: Product): Observable<Product> {
        return new Observable<Product>();
    }
    updateProduct(product): Observable<Product> {
        return new Observable<Product>();
    }
    deleteProduct(id: string): Observable<Product> {
        return new Observable<Product>();
    }    
    
}