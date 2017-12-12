import { PlacePage } from './../place/place';
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
 import {AuthService} from '../login/login.service';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {
  map: GoogleMap;

  
  
  constructor(public auth:AuthService,public navCtrl: NavController, private googleMaps: GoogleMaps, private geolocation: Geolocation) { }

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


  loadMap() {

    // Crea la instancia del mapa con el elemento html
    this.map = this.googleMaps.create('map_canvas');

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
      });
      
      this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {

          // Mi posición
          let loc: LatLng = new LatLng(geoposition.coords.latitude, geoposition.coords.longitude);
          this.moveCamera(loc);

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
       
       // Se suscribe a los cambios de posición del dispositivo
       let watch = this.geolocation.watchPosition();
       watch.subscribe((geoposition: Geoposition) => {
          let loc: LatLng = new LatLng(geoposition.coords.latitude, geoposition.coords.longitude);
          this.moveCamera(loc);
       });
      
    }

}
