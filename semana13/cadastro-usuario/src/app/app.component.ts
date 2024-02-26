import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  usersList: any = [];
  genresList: any = [];
 constructor(
   private readonly _usersService : UsersService,
   private readonly _genresService: GenresService
 ) {}

 ngOnInit(){
   this.getUser();  
   this.getGenres();  
   }

  private getUser(){
    this._usersService.gerUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
      console.log(usersListResponse);
    })
  }
  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
      console.log(this.genresList);
    });
  }


}


