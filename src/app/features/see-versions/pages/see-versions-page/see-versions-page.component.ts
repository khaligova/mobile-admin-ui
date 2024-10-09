import { AfterViewInit, Component, OnInit } from '@angular/core';
import { VersionBaseService } from '../../../../services/back-end-services/versions/version-base.service';
import { PageResponse } from '../../../../../core/pagination/page.response';
import { VersionTableDto } from '../../../../../domain/dtos/version-table.dto';
import { GetAllVersionsResponse } from '../../../../services/back-end-services/versions/models/responses/get-all-versions.response';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-versions-page',
  standalone: true,
  imports: [TableModule, DatePipe, ButtonModule, PaginatorModule],
  templateUrl: './see-versions-page.component.html',
  styleUrl: './see-versions-page.component.scss'
})
export class SeeVersionsPageComponent implements OnInit {
  public perPageOptions = [10, 20, 30];
  public size: number = this.perPageOptions[0];
  public tableLoader: boolean = false;

  public versionsPageable: PageResponse<VersionTableDto> = null;

  constructor(
    private readonly _versionService: VersionBaseService,
    private readonly _router:Router
  ) { }

  async ngOnInit(){
    this.tableLoader = true;
    this.versionsPageable = await (await this._versionService.getAll(this.size, 1)).pageResponse
    this.tableLoader = false;
  }

  async onPageChange(paginatorState: PaginatorState): Promise<void> {
    this.size = paginatorState.rows;
    this.tableLoader = true;
    this.versionsPageable = (await this._versionService.getAll(this.size, paginatorState.page + 1)).pageResponse;
    this.tableLoader = false;
  }

  goToCreatePage(){
    this._router.navigateByUrl("/create-version");
  }

}
