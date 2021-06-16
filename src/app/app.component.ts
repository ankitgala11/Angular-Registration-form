import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';


import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';


declare var NgForm:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  title = 'angular';

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$"),],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      // tnc: ['', Validators.required]
    });

  }

  get fval() { 
    return this.registerForm.controls; 
  }

  onButtonClick(pageName: string): void{
    this.router.navigate([`${pageName}`]);
  }

  // goTo(){
  //   this.router.navigate(['/details']);
  // }
  
  signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.router.navigate(['/details']);
    //this.router.navigateByUrl('/details');
    
  }


}
