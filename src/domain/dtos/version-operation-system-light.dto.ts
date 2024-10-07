import { OperationSystemDto } from "./operation-system.dto";


export class VersionOperationSystemLightDto {
    public id: number;
    public isForceUpdateEnable: boolean;
    public operationSystem: OperationSystemDto;
}
