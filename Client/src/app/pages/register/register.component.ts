import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Register } from 'src/app/interfaces/auth';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  errorMessages: any;
  errorObject: any = {};
  value: string = '';

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        Validators: this.passwordMatchValidator,
      }
    );
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    const user = this.registerForm.value;

    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      this.registerForm
        .get('confirmPassword')
        ?.setErrors({ passwordMismatch: true });
      return;
    }
    console.log('user: ', user);
    // console.log(this.registerForm.get('username')?.setErrors);
    this.http.post<any>(`http://localhost:8080/auth/register`, user).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Đăng kí thành công',
        });
        this.registerForm.reset();
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Đăng kí thất bại',
        });
      }
    );
  }
}
