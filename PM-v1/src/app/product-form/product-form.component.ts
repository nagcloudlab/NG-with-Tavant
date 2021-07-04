import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { range } from './cutom-validators'

import { debounceTime } from 'rxjs/operators'
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  errors: any = {}

  productForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {

    // productForm = new FormGroup({
    //   name: new FormControl(''),
    //   price: new FormControl(0)
    // })

    // or

    // this.productForm = this.fb.group({
    //   name: 'ITEM',
    //   price: 100
    // });

    // or

    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [range(100, 1000)]],
      ptype: 'other',
      elecSpec: '',
      arr: this.fb.array([])
    });


    // this.productForm.get('name')
    // ?.valueChanges.subscribe(value=>{
    //   console.log(value);
    // })


    let nameField: any = this.productForm.get('name');
    nameField?.statusChanges
      .pipe(debounceTime(3000))
      .subscribe((status: any) => {
        if (status === "INVALID") {
          let errors: any = nameField.errors;
          if (errors.required) {
            this.errors['name'] = "name is required"
          }
          if (errors.minlength) {
            this.errors['name'] = ">=3 char"
          }
        } else {
          delete this.errors['name'];
        }
      })

  }

  changePtype(ptype: string) {
    let elecSpecControl = this.productForm.get('elecSpec')
    if (ptype === 'elec') {
      elecSpecControl?.setValidators([Validators.required])
    } else {
      elecSpecControl?.clearValidators()
    }
    elecSpecControl?.updateValueAndValidity()
  }

  handleSubmit(event: any) {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.productsService.saveProduct(formData)
        .subscribe((response:any) => {
          this.router.navigateByUrl("/all")
        })
    }
  }
  loadProduct() {
    //..
    let model = {
      name: 'item-0',
      // price: 10
    }
    // this.productForm.setValue(model)
    this.productForm.patchValue(model)
  }

}


/*

  FormGroup         ==> form-model
    -FormControl(s)
    -FormGroup(s)

*/