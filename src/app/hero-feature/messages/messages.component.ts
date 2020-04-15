import { Component, OnInit } from '@angular/core';
import { MeessageService } from '../meessage.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MeessageService) { }

  ngOnInit() {
  }

}
