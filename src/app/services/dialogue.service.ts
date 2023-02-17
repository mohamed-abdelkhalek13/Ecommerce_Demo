import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ConfirmationComponent } from '../components/shared/confirmation/confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {
  dialogueSubject$ = new Subject();
  constructor(private dialogue: MatDialog ) {
    this.dialogue = dialogue;
  }
  openDialogue(component:any, id?:any){
    return this.dialogue.open(component, {
      width:'50%',
      data:id})
  }

}
