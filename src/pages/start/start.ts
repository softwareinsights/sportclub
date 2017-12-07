import { StartService } from './start.service';
import { PlacePage } from './../place/place';
import { Component, OnInit } from '@angular/core';
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
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage implements OnInit {
  map: GoogleMap;

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, private geolocation: Geolocation, private service: StartService) { }

  ngOnInit() {
    this.service.colocarLocalidades()
      .subscribe(
          (response: any) => {
            console.log("response", response);
            response.forEach(element => {
              console.log("element", element);
              let loc: LatLng = new LatLng(element.lat, element.lng);
              // Crea marcador 
              this.createMarker(loc, element.nombre).then((marker: Marker) => {
                marker.showInfoWindow();
              })
              .catch( err => {
                console.log(err);
              });
            });
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

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    // Crea la instancia del mapa con el elemento html
    this.map = this.googleMaps.create('map_canvas', mapOptions);

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
