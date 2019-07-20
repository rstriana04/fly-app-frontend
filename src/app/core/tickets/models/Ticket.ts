import { Airplanes } from '../../airplanes/models/Airplanes';
import { Flights } from '../../flights/models/Flights';
import { Passenger } from '../../passenger/models/Passenger';

export class Ticket {
  constructor(
    public id?: number,
    public valorTickete?: DoubleRange,
    public ivaTiquete?: DoubleRange,
    public descuentoTickete?: DoubleRange,
    public flights?: Flights[],
    public airplanes?: Airplanes[],
    public paseengers?: Passenger[]
  ) {}
}
