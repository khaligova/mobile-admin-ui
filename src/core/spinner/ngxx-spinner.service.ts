import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { BaseSpinnerService } from "./base-spinner.service";


@Injectable()
export class NgxxSpinnerService extends BaseSpinnerService {

    constructor(private readonly _ngxSpinner: NgxSpinnerService) {
        super();
    }

    override show() {
        this._ngxSpinner.show();
    }
    override hide() {
        this._ngxSpinner.hide();
    }

}
