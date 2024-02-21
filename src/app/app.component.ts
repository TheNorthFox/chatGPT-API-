import { Component } from '@angular/core';
import { ChatService } from './service/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'chatGPT';

  userRequest = '';
  messageContent: string | null = null;

  constructor(private apiService: ChatService) { }

  chatRequest() {
    this.apiService.postChatRequest(this.userRequest).subscribe(
      (chatBotResponse) => {
        this.messageContent = chatBotResponse?.choices?.[0]?.message?.content;
      },
      (error) => {
        console.error('Error; No response found');
      }
    );
  }

  submitOnEnter() {
      this.chatRequest();
      this.userRequest = '';
    
  }
}
