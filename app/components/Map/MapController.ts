import { Component, Template, m } from "pyrite";
import { MapTemplate } from "./MapTemplate";

export interface MapAttributes {
    lat: string;
    lng: string;
    id: string;
}

@Template(MapTemplate)
export class MapController extends Component<MapAttributes> {

    $onCreate(){
        setTimeout(()=>{
            this.initMap();
        },100);
    }

    initMap(){
        const latLng = {
            lat: parseInt(this.props.lat),
            lng: parseInt(this.props.lng)
        }
        const map = new google.maps.Map(document.getElementById(this.props.id), {
            center: latLng,
            zoom: 1
        });

        var market = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }
}