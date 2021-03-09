import {TranslateParser, TranslateService} from '@ngx-translate/core';
import {MatPaginatorIntl} from "@angular/material/paginator";
import {Injectable} from "@angular/core";

@Injectable()
export class TranslatablePaginator extends MatPaginatorIntl {
  private readonly _langPrefix: string;
  private rangeLabelIntl: string;

  constructor(private translateService: TranslateService, private translateParser: TranslateParser) {
    super();
    this._langPrefix = "customers.customersListPage.paginator.";

    this.getTranslations();
  }

  getTranslations() {
    this.translateService.get([
      this._langPrefix + 'itemPerPage',
      this._langPrefix + 'next-page',
      this._langPrefix + 'previous-page',
      this._langPrefix + 'range'
    ])
      .subscribe(translation => {
        this.itemsPerPageLabel = translation[this._langPrefix + 'itemPerPage'];
        this.nextPageLabel = translation[this._langPrefix + 'nextPage'];
        this.previousPageLabel = translation[this._langPrefix + 'previousPage'];
        this.rangeLabelIntl = translation[this._langPrefix + 'range'];
        this.changes.next();
      });
  }

  getRangeLabel = (page, pageSize, length) => {
    length = Math.max(length, 0);
    const startIndex = (page * pageSize) + 1;
    const endIndex = startIndex < length ?
      Math.min(startIndex - 1 + pageSize, length) :
      startIndex - 1 + pageSize;
    return this.translateParser.interpolate(this.rangeLabelIntl, { startIndex, endIndex, length });
  };
}
