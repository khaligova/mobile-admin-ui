export abstract class BaseToasterService{
  abstract showSuccess(message:string,title:string);
  abstract showWarning(message:string,title:string);
  abstract showInfo(message:string,title:string);
  abstract showDanger(message:string,title:string);
}