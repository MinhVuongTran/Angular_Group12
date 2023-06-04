import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadImageServiceService {
  constructor(private http: HttpClient) {}
  uploadImage(files: any[]): Observable<any> {
    const formData = new FormData();
    for (let file of files) {
      formData.append('images', file);
    }

    return this.http.post<any>('http://localhost:8080/upload/images', formData);
  }
}
