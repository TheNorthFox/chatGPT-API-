import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  postChatRequest(data: any) {
    return this.http.post<any>(`${this.baseUrl}/chatResponse`, data);
  }
}
