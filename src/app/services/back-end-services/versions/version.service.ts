import { Inject, Injectable } from "@angular/core";
import { GetAllVersionsResponse } from "./models/responses/get-all-versions.response";
import { VersionBaseService } from "./version-base.service";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()
export class VersionService extends VersionBaseService {
    private readonly controller = "Version";
    constructor(@Inject("api-base-url") private readonly _baseUrl: string, private readonly _httpClient: HttpClient) {
        super();
    }

    override getAll(size: number, index: number): Promise<GetAllVersionsResponse> {
        let url: string = `${this._baseUrl}/${this.controller}/GetAll?Size=${size}&Index=${index}`;

        return firstValueFrom(this._httpClient.get<GetAllVersionsResponse>(url))
    }

}