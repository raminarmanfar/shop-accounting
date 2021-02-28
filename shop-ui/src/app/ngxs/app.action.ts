import {Language} from "../shared/models/enums/language.enum";

export class GetCustomers {
  static readonly type = '[Customer] Get Customers';
}

export class GetActiveLanguage {
  static readonly type = '[Language] Get Active Language';
}

export class SetActiveLanguage {
  static readonly type = '[Language] Set Active Language';

  constructor(public payload: Language) {
  }
}

export class SwitchActiveLanguage {
  static readonly type = '[Language] Switch Active Language';
}
