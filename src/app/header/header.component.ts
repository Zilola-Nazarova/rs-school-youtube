import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SortingBarComponent } from '../sorting-bar/sorting-bar.component';

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
