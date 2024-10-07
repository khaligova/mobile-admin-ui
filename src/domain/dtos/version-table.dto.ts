import { VersionOperationSystemLightDto } from "./version-operation-system-light.dto";

export class VersionTableDto{
    public id:number;
    public number:string;
    public token:string;
    public versionOperationSystems:VersionOperationSystemLightDto[]
    public createDate:Date;
}

