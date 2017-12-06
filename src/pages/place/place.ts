import { PlaceService } from './place.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
 } from '@ionic-native/google-maps';
 import { Geolocation, Geoposition } from '@ionic-native/geolocation';
 

@Component({
  selector: 'page-place',
  templateUrl: 'place.html'
})
export class PlacePage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, private geolocation: Geolocation, private service: PlaceService) { }


  nombre: string;
  descripcion: string;
  lat: number;
  lng:number;



  volver(){
    this.navCtrl.pop();
  }

  onSubmit(): void {
    const values: any = {
      'nombre': this.nombre,
      'descripcion': this.descripcion
    }
    this.service.create(values)
      .subscribe(
          (response: any) => {
            if(response.id !== undefined) {
              alert("¡Has creado tu lugar correctamente!");
            } 
          });
  }

  ionViewDidLoad() {
   this.loadMap();
  }

  moveCamera(loc: LatLng) {
    let options: CameraPosition<any> = {
      target: loc,
      zoom: 15,
      tilt: 10
    }
    this.map.moveCamera(options)
  }

  createMarker(loc: LatLng, title: string) {
    let markerOptions: MarkerOptions = {
      position: loc,
      title: title
    }
    return this.map.addMarker(markerOptions)
  }


  localizame(){
   
      this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {

          // Mi posición
          let loc: LatLng = new LatLng(geoposition.coords.latitude, geoposition.coords.longitude);
          this.moveCamera(loc);

          this.lat = geoposition.coords.latitude;
          this.lng = geoposition.coords.latitude;

          // Crea marcador para mi posición
          this.createMarker(loc, "Aquí estoy").then((marker: Marker) => {
            marker.showInfoWindow();
          })
          .catch( err => {
            console.log(err);
          });

       }).catch((error) => {
         console.log('Error getting location', error);
       });
       
  }


  loadMap() {

    // Crea la instancia del mapa con el elemento html
    this.map = this.googleMaps.create('map_canvas');

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
      });
   
    }

}
