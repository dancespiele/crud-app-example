import { m } from 'pyrite';
import { MapController } from './MapController';

export function MapTemplate(this: MapController) {
    return (
        <div id={this.props.id} class="map"></div>
    );
}