import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() lecturer = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    starting_date: '',
    image: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
