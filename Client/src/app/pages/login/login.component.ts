import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signinForm!: FormGroup;
  private localStorageKey = 'user';
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  messages: any = [];
  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  getUser() {
    const userString = localStorage.getItem(this.localStorageKey);
    return JSON.parse(userString!);
  }
  signin() {
    if (this.signinForm.invalid) {
      return;
    }
    const signin = this.signinForm.value;
    // console.log(signin);
    this.http.post<any>(`http://localhost:8080/auth/login`, signin).subscribe(
      (respones) => {
        console.log('Dang nhap thanh cong', respones);
        // Lưu thông tin user vào local
        localStorage.setItem(
          this.localStorageKey,
          JSON.stringify(respones.data)
        );
        // Kiểm tra xem đã có người dùng đăng nhập chưa
        const currentUser = this.getUser()
        if (currentUser) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Warning',
            detail: 'Có người dùng khác đã đăng nhập',
          });
          return;
        }

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Đăng nhập thành công',
        });
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Đăng nhập thất bại',
        });
      }
    );
  }
}
