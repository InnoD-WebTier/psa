import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Index extends React.Component {

  componentDidMount() {
    const uluru = {lat: 37.8713466, lng: -122.2589184};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    const markers = [
      {lat: 37.8713466, lng: -122.2589184, string: "<p>Big memes</p>"},
      {lat: 37.872, lng: -122.251, string: "<p>Small memes</p>"},
    ];
    for (let position of markers) {
      const infowindow = new google.maps.InfoWindow({
        content: position.string,
      });
      const marker = new google.maps.Marker({
        position,
        map: map
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }
  }

  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
        />
        <div className="map-container">
          <div id="map"></div>
        </div>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAK-0aO8lrEis8_DuFJj8EevofQjhOh9Oc"></script>
      </div>
    )
  }
}
