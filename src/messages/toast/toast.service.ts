import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IToastInterface } from './itoast-interface';

@Injectable()
export class ToastService implements IToastInterface {

  constructor(private messageService: MessageService) { }


  GetSuccessToastMessage():void {
    console.log("show ay bala isle")
    this.messageService.add({severity:'success', summary:'heading',detail:'men bir petesh'});
  }
}
