import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fly-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public passenger() {
    this.router.navigate(['/home/pasajeros/mostrar-pasajeros']);
  }

  public flights() {
    this.router.navigate(['/home/vuelos/mostrar-vuelos']);
  }

  public tickets() {
    this.router.navigate(['/home/tiquetes/mostrar-tiquetes']);
  }

  public airplanes() {
    this.router.navigate(['/home/aviones/mostrar-aviones']);
  }

  public currentPath() {
    this.router.navigate(['/home']);
  }
}
