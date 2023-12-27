import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
   this.validateForm = this.fb.group({
      name: ["",[Validators.required]],
    });
  }
    
  public submitForm(): void { 
    if (this.validateForm.valid) { 
      const formData = new FormData();
      formData.append('name', this.validateForm.value.name);
    }
    console.log(this.validateForm.value.name); 
  }
  
}

