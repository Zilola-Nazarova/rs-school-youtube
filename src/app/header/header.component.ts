import { Component } from '@angular/core';

import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SortingBarComponent } from '../sorting-bar/sorting-bar.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    UserProfileComponent,
    SearchBarComponent,
    SortingBarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
