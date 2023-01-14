import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game.interface';
import { GameService } from 'src/app/servicios/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public gamesList!: Game[]

  constructor(
    private gameService: GameService
  ){

  }

  ngOnInit(): void {
    this.getGames();
  }

  private getGames(): void{
    this.gameService.findGame().subscribe({
      next: ( resp ) => {
        this.gamesList = resp.results
      }, error: (err) => {
        console.log(err)
      }
        
    })
  }
}
