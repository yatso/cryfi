var map;
image = "";
//console.log(yelpCafes[id].voteCount);

require([
  "esri/map",
  "esri/layers/FeatureLayer",
  "esri/dijit/PopupTemplate",
  "esri/request",
  "esri/geometry/Point",
  "esri/graphic",
  "esri/symbols/PictureMarkerSymbol",
  "esri/renderers/ClassBreaksRenderer",
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
  PictureMarkerSymbol,
  ClassBreaksRenderer,
  on,
  array
) {

  var featureLayer;

  map = new Map("map", {
//    basemap: "satellite",
    basemap: "dark-gray",  
    center: [-122.08155127581, 37.38815285],
    zoom: 15
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
          "url": image,
          "contentType": "image/png",
//        "width": 15,
//        "height": 15
          "width": 40,
          "height": 40
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
    },
    {
      "name": "voteCount",
      "alias": "voteCount",
      "type": "esriFieldTypeInteger"
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
  
  var symbol = new PictureMarkerSymbol(image, 64, 64);
  var renderer = new ClassBreaksRenderer(symbol, "voteCount");
      
  //var picBaseUrl = "https://static.arcgis.com/images/Symbols/Shapes/";
   var weak = new PictureMarkerSymbol("images/wifi_1_ltblue.png", 64, 64).setOffset(0, 15);
   var medium = new PictureMarkerSymbol("images/wifi_2_ltblue.png", 64, 64).setOffset(0, 15);
   var strong = new PictureMarkerSymbol("images/wifi_3_ltblue.png", 64, 64).setOffset(0, 15);
   renderer.addBreak(0, 5, weak);
   renderer.addBreak(5, 10, medium);
   renderer.addBreak(10, 15, strong);
   featureLayer.setRenderer(renderer);

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
  var arr = [];
  $.get( "https://cryfi.firebaseio.com/.json", function (data) {
    for (key in data) {
      arr.push(data[key]);
    };
    var features = [];
    array.forEach(arr, function(item) {
      console.log(item);
      var attr = {};
      attr["description"] = item.businessName;
      attr["title"] = item.businessName ? item.businessName : "Business";
      attr["voteCount"] = item.voteCount;
      var geometry = new Point(item);

      var graphic = new Graphic(geometry);
      graphic.setAttributes(attr);
      features.push(graphic);
    });

    featureLayer.applyEdits(features, null, null);
  });

}

function requestFailed(error) {
  console.log('failed');
}
});
