export class Customer {
  constructor(
    public id: number,
    public customerName: string,
    public customerSurname: string,
    public dateStarted: Date,
  public homeAddress: string,
    public cellPhone: string,
    public workAddress?: string,
    public homePhone?: string,
    public workPhone?: string,
  ) {
  }

}

