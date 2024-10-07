import { Component, OnInit } from '@angular/core';
import { VersionBaseService } from '../../../../services/back-end-services/versions/version-base.service';
import { PageResponse } from '../../../../../core/pagination/page.response';
import { VersionTableDto } from '../../../../../domain/dtos/version-table.dto';
import { GetAllVersionsResponse } from '../../../../services/back-end-services/versions/models/responses/get-all-versions.response';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-versions-page',
  standalone: true,
  imports: [TableModule,DatePipe],
  templateUrl: './versions-page.component.html',
  styleUrl: './versions-page.component.scss'
})
export class VersionsPageComponent implements OnInit{
  
  public versionsPageable:PageResponse<VersionTableDto>;

  constructor(private readonly _versionService:VersionBaseService){}

  async ngOnInit(): Promise<void> {
    this.versionsPageable=(await this._versionService.getAll(10,1)).pageResponse;
  }

}
