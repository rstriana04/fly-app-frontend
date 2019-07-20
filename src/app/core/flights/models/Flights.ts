export class Flights {
  constructor(
    public id?: number,
    public descripcion?: string,
    public fechaSalidad?: Date,
    public ciudadOrigen?: string,
    public ciudadDestino?: string
  ) {}
}
