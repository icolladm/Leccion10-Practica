import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../model/game.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public findGame(): Observable<{results: Game[]}>{
    return this.httpClient.get<{results: Game[]}>("https://api.rawg.io/api/games?key=f3a3f996b19e406eb2b1a9b9a86a3a08")
  }
}
