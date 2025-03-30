import { Component, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { EventEmitter } from '@angular/core';
import { GamesInfo } from '../../interfaces/games-info';
import { ActivatedRoute } from '@angular/router';
import { GameListService } from '../../services/game-list.service';

@Component({
  selector: 'app-id-input',
  imports: [CommonModule, FormsModule, MatFormField, MatLabel, MatInputModule],
  templateUrl: './id-input.component.html',
  styleUrl: './id-input.component.scss'
})
export class IdInputComponent implements OnInit{
String(arg0: number|undefined): string {
throw new Error('Method not implemented.');
}
convertToString(value: any): string {
  return String(value); // Convert to string logic
}

  @Output() idChanged = new EventEmitter<string>();

  route: ActivatedRoute = inject(ActivatedRoute);
  gameService = inject(GameListService);
  
  gamesInfo : GamesInfo | undefined;
  pageId = false;
  pageTag = false;
  pageServer = false;
  pageZone_Id = false;

  constructor() {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.gamesInfo = this.gameService.getGameById(gameId);
  }

  ngOnInit(): void {
    switch(this.gamesInfo?.id) {
     case 0:
      this.pageId = true;
      this.pageTag = true;
      break;
    case 1:
      this.pageId = true;
      this.pageServer = true;
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      this.pageId = true;
      break;
    case 6:
      this.pageId = true;
      this.pageServer = true;
      break;
    case 7:
    case 8:
    case 9:
      this.pageId = true;
      break;
    case 10:
      this.pageId = true;
      this.pageServer = true;
      break;
    case 11:
      this.pageId = true;
      break;
    case 12:
      this.pageId = true;
      this.pageServer = true;
      break;
    case 13:
      this.pageId = true;
      break;
    case 14:
      this.pageId = true;
      this.pageServer = true;
      break;
    case 15:
    case 16:
      this.pageId = true;
      break;
    case 17:
      this.pageId = true;
      this.pageZone_Id = true;
      break;
    case 18:
      this.pageId = true;
      break;
    case 19:
      this.pageId = true;
      this.pageServer = true;
      break;
    case 20:
    case 21:
      this.pageId = true;
      break;
    }
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.idChanged.emit(inputValue);
  }
}
