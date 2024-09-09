import { ErrorHandler } from "@angular/core";

export class ExceptionHandling implements ErrorHandler{
    handleError(error: any): void {
        console.log("men islemirem hihi");
    }

}

