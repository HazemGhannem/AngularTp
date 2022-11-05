import { Component, OnInit } from '@angular/core';
import {Product} from '../../Model/product';
import {  ProductService} from "../../Service/product.service";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  text:any
  ListProduct:Product[]=[]
  len!: number
  data!:number
  selectedRow!:number
  constructor(private productservice:ProductService ) { }

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe((t)=>this.ListProduct=t)

    
    

  }
  onclick(){
    this.productservice.getNbProductsByLibelle(this.text).subscribe(data => this.len = data) 
  }

  handle(value: any){

    this.productservice.getNbProductsByLibelle(value).subscribe(data => this.data = data)
  }

}
