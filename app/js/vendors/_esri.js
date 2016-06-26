
var map;
require([
  "esri/map",
  "esri/layers/FeatureLayer",
  "esri/dijit/PopupTemplate",
  "esri/request",
  "esri/geometry/Point",
  "esri/graphic",
  "dojo/on",
  "dojo/_base/array",
  "dojo/domReady!"
], function(
  Map,
  FeatureLayer,
  PopupTemplate,
  esriRequest,
  Point,
  Graphic,
  on,
  array
) {

  var featureLayer;

  map = new Map("map", {
    basemap: "satellite",
    center: [-122.08155127581, 37.38815285],
    zoom: 13
  });

  //hide the popup if its outside the map's extent
  map.on("mouse-drag", function(evt) {
    if (map.infoWindow.isShowing) {
      var loc = map.infoWindow.getSelectedFeature().geometry;
      if (!map.extent.contains(loc)) {
        map.infoWindow.hide();
      }
    }
  });

  //create a feature collection for the flickr photos
  var featureCollection = {
    "layerDefinition": null,
    "featureSet": {
      "features": [],
      "geometryType": "esriGeometryPoint"
    }
  };
  featureCollection.layerDefinition = {
    "geometryType": "esriGeometryPoint",
    "objectIdField": "ObjectID",
    "drawingInfo": {
      "renderer": {
        "type": "simple",
        "symbol": {
          "type": "esriPMS",
          "url": "images/wifi_3.png",
          "contentType": "image/png",
          "width": 15,
          "height": 15
        }
      }
    },
    "fields": [{
      "name": "ObjectID",
      "alias": "ObjectID",
      "type": "esriFieldTypeOID"
    }, {
      "name": "description",
      "alias": "Description",
      "type": "esriFieldTypeString"
    }, {
      "name": "title",
      "alias": "Title",
      "type": "esriFieldTypeString"
    }]
  };

  //define a popup template
  var popupTemplate = new PopupTemplate({
    title: "{title}",
    description: "{description}"
  });

  //create a feature layer based on the feature collection
  featureLayer = new FeatureLayer(featureCollection, {
    id: 'flickrLayer',
    infoTemplate: popupTemplate
  });

  //associate the features with the popup on click
  featureLayer.on("click", function(evt) {
    map.infoWindow.setFeatures([evt.graphic]);
  });

  map.on("layers-add-result", function(results) {
    requestPhotos();
  });
  //add the feature layer that contains the flickr photos to the map
  map.addLayers([featureLayer]);

  function requestPhotos() {
    //get geotagged photos from flickr
    //tags=flower&tagmode=all
    var requestHandle = esriRequest({
      url: "https://api.flickr.com/services/feeds/geo?&format=json",
      callbackParamName: "jsoncallback"
    });
    requestHandle.then(requestSucceeded, requestFailed);
  }

  function requestSucceeded(response, io) {
    //loop through the items and add to the feature layer
    var features = [];
    var arr = [
      {
        "businessId": "peets-coffee-and-tea-mountain-view",
        "businessName": "Peet's Coffee & Tea",
        "businessAddress": "695 W El Camino Real",
        "latitude": 37.384704,
        "longitude": -122.082824,
        "businessPhone": "6506050003"
      },
      {
        "businessId": "starbucks-mountain-view-8",
        "businessName": "Starbucks",
        "businessAddress": "750 Castro St",
        "latitude": 37.3875860361358,
        "longitude": -122.08306465162,
        "businessPhone": "6505649255"
      },
      {
        "businessId": "bean-scene-cafe-mountain-view",
        "businessName": "Bean Scene Cafe",
        "businessAddress": "500 Castro St",
        "latitude": 37.390169862591,
        "longitude": -122.08196434027,
        "businessPhone": "6509034871"
      },
      {
        "businessId": "mountain-view-tea-village-and-gallery-mountain-view-2",
        "businessName": "Mountain View Tea Village and Gallery",
        "businessAddress": "361 Castro St",
        "latitude": 37.391548,
        "longitude": -122.08007,
        "businessPhone": "6502825690"
      }
    ]
    array.forEach(arr, function(item) {
      var attr = {};
      attr["description"] = item.businessName;
      attr["title"] = item.businessName ? item.businessName : "Flickr Photo";

      var geometry = new Point(item);

      var graphic = new Graphic(geometry);
      graphic.setAttributes(attr);
      features.push(graphic);
    });

    featureLayer.applyEdits(features, null, null);
  }

  function requestFailed(error) {
    console.log('failed');
  }
});
