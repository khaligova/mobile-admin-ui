import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToasterBase } from './toaster-base';

@Injectable()

export class PrimeNgToasterService extends ToasterBase {

  constructor(private messageService: MessageService) {
    super();
  }



  override showSuccess(message: string, title: string) {
    this.messageService.add({severity:'success',summary:title,detail:message,})   
  }
  override showWarning(message: string, title: string) {
    this.messageService.add({severity:'warning',summary:title,detail:message,})   
  }
  override showInfo(message: string, title: string) {
    this.messageService.add({severity:'info',summary:title,detail:message,})   
  }
  override showDanger(message: string, title: string) {
    this.messageService.add({severity:'error',summary:title,detail:message,})   
  }


  
  
  


  
}
