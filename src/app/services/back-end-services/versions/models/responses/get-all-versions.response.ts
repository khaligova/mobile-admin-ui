import { PageResponse } from "../../../../../../core/pagination/page.response";
import { VersionTableDto } from "../../../../../../domain/dtos/version-table.dto";

export class GetAllVersionsResponse{
    public pageResponse:PageResponse<VersionTableDto>;
}