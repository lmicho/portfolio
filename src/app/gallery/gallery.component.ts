import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private urls: string[] = [
    '../assets/gallery/bike.jpg',
    '../assets/gallery/bridge.JPG',
    '../assets/gallery/caserne.JPG',
    '../assets/gallery/chinatown_dragon.JPG',
    '../assets/gallery/orford_forest.JPG',
    '../assets/gallery/old_port_black.JPG',
    '../assets/gallery/cityscape.jpg',
    '../assets/gallery/dep.JPG',
    '../assets/gallery/garage.jpg',
    '../assets/gallery/gaspe.JPG',
    '../assets/gallery/gaspesie.JPG',
    '../assets/gallery/gay_village.JPG',
    '../assets/gallery/iceland_beach.JPG',
    '../assets/gallery/old_port_tree.JPG',
    '../assets/gallery/italy_door.JPG',
    '../assets/gallery/toront.JPG',
    '../assets/gallery/italy.JPG',
    '../assets/gallery/jacque-cartir.JPG',
    '../assets/gallery/lafontaine.JPG',
    '../assets/gallery/manif.JPG',
    '../assets/gallery/mont-royal.jpg',
    '../assets/gallery/new-orleans.JPG',
    '../assets/gallery/chinatown.JPG',
    '../assets/gallery/old_port.JPG',
    '../assets/gallery/orford_people.JPG',
    '../assets/gallery/orford.JPG',
    '../assets/gallery/chinatown_noodle.jpg',
    '../assets/gallery/park.JPG',
    '../assets/gallery/plateau_winter.JPG',
    '../assets/gallery/plateau.JPG',
    '../assets/gallery/riviere_ouelle.JPG',
    '../assets/gallery/riviere-ouelle-sunset.JPG',
    '../assets/gallery/sainte-cath.JPG',
    '../assets/gallery/lafontaine_blur.JPG',
    '../assets/gallery/sunset.JPEG',
    '../assets/gallery/iceland_plane.JPG',
    '../assets/gallery/wheel.JPG'
  ];

  constructor() { }

  ngOnInit() {
  }

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m
    });
  }

}
