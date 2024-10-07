import { GetAllVersionsResponse } from "./models/responses/get-all-versions.response";

export abstract class VersionBaseService{
    abstract getAll(size:number,index:number):Promise<GetAllVersionsResponse>;
}