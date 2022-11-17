/* eslint-disable @typescript-eslint/semi */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  formLogin = this.formBuilder.group({
    email:['',Validators.compose([Validators.required,Validators.email])],
    senha:['',Validators.compose([Validators.required,Validators.minLength(6)])],
  })

  constructor(private formBuilder: FormBuilder) {}

}
