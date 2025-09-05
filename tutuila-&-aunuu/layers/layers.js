var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tl_2024_60_tract_1 = new ol.format.GeoJSON();
var features_tl_2024_60_tract_1 = format_tl_2024_60_tract_1.readFeatures(json_tl_2024_60_tract_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2024_60_tract_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tl_2024_60_tract_1.addFeatures(features_tl_2024_60_tract_1);
var lyr_tl_2024_60_tract_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tl_2024_60_tract_1, 
                style: style_tl_2024_60_tract_1,
                popuplayertitle: 'tl_2024_60_tract',
                interactive: false,
    title: 'tl_2024_60_tract<br />\
    <img src="styles/legend/tl_2024_60_tract_1_0.png" /> 950100<br />\
    <img src="styles/legend/tl_2024_60_tract_1_1.png" /> 950200<br />\
    <img src="styles/legend/tl_2024_60_tract_1_2.png" /> 950300<br />\
    <img src="styles/legend/tl_2024_60_tract_1_3.png" /> 950500<br />\
    <img src="styles/legend/tl_2024_60_tract_1_4.png" /> 950600<br />\
    <img src="styles/legend/tl_2024_60_tract_1_5.png" /> 950700<br />\
    <img src="styles/legend/tl_2024_60_tract_1_6.png" /> 950900<br />\
    <img src="styles/legend/tl_2024_60_tract_1_7.png" /> 951000<br />\
    <img src="styles/legend/tl_2024_60_tract_1_8.png" /> 951100<br />\
    <img src="styles/legend/tl_2024_60_tract_1_9.png" /> 951201<br />\
    <img src="styles/legend/tl_2024_60_tract_1_10.png" /> 951202<br />\
    <img src="styles/legend/tl_2024_60_tract_1_11.png" /> 951203<br />\
    <img src="styles/legend/tl_2024_60_tract_1_12.png" /> 951300<br />\
    <img src="styles/legend/tl_2024_60_tract_1_13.png" /> 951500<br />\
    <img src="styles/legend/tl_2024_60_tract_1_14.png" /> 951600<br />\
    <img src="styles/legend/tl_2024_60_tract_1_15.png" /> 951800<br />\
    <img src="styles/legend/tl_2024_60_tract_1_16.png" /> 951900<br />\
    <img src="styles/legend/tl_2024_60_tract_1_17.png" /> 952000<br />\
    <img src="styles/legend/tl_2024_60_tract_1_18.png" /> <br />' });
var format_SpaceX_BSL_Awards_2 = new ol.format.GeoJSON();
var features_SpaceX_BSL_Awards_2 = format_SpaceX_BSL_Awards_2.readFeatures(json_SpaceX_BSL_Awards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpaceX_BSL_Awards_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpaceX_BSL_Awards_2.addFeatures(features_SpaceX_BSL_Awards_2);
cluster_SpaceX_BSL_Awards_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SpaceX_BSL_Awards_2
});
var lyr_SpaceX_BSL_Awards_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SpaceX_BSL_Awards_2, 
                style: style_SpaceX_BSL_Awards_2,
                popuplayertitle: 'SpaceX_BSL_Awards',
                interactive: true,
                title: '<img src="styles/legend/SpaceX_BSL_Awards_2.png" /> SpaceX_BSL_Awards'
            });
var format_ASTCA_BSL_Awards_3 = new ol.format.GeoJSON();
var features_ASTCA_BSL_Awards_3 = format_ASTCA_BSL_Awards_3.readFeatures(json_ASTCA_BSL_Awards_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASTCA_BSL_Awards_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASTCA_BSL_Awards_3.addFeatures(features_ASTCA_BSL_Awards_3);
cluster_ASTCA_BSL_Awards_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ASTCA_BSL_Awards_3
});
var lyr_ASTCA_BSL_Awards_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ASTCA_BSL_Awards_3, 
                style: style_ASTCA_BSL_Awards_3,
                popuplayertitle: 'ASTCA_BSL_Awards',
                interactive: true,
                title: '<img src="styles/legend/ASTCA_BSL_Awards_3.png" /> ASTCA_BSL_Awards'
            });
var format_Bluesky_BSL_Awards_4 = new ol.format.GeoJSON();
var features_Bluesky_BSL_Awards_4 = format_Bluesky_BSL_Awards_4.readFeatures(json_Bluesky_BSL_Awards_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bluesky_BSL_Awards_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bluesky_BSL_Awards_4.addFeatures(features_Bluesky_BSL_Awards_4);
cluster_Bluesky_BSL_Awards_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bluesky_BSL_Awards_4
});
var lyr_Bluesky_BSL_Awards_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bluesky_BSL_Awards_4, 
                style: style_Bluesky_BSL_Awards_4,
                popuplayertitle: 'Bluesky_BSL_Awards',
                interactive: true,
                title: '<img src="styles/legend/Bluesky_BSL_Awards_4.png" /> Bluesky_BSL_Awards'
            });
var format_fp_cai_5 = new ol.format.GeoJSON();
var features_fp_cai_5 = format_fp_cai_5.readFeatures(json_fp_cai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fp_cai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fp_cai_5.addFeatures(features_fp_cai_5);
var lyr_fp_cai_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fp_cai_5, 
                style: style_fp_cai_5,
                popuplayertitle: 'fp_cai',
                interactive: true,
    title: 'fp_cai<br />\
    <img src="styles/legend/fp_cai_5_0.png" /> C<br />\
    <img src="styles/legend/fp_cai_5_1.png" /> G<br />\
    <img src="styles/legend/fp_cai_5_2.png" /> H<br />\
    <img src="styles/legend/fp_cai_5_3.png" /> L<br />\
    <img src="styles/legend/fp_cai_5_4.png" /> S<br />\
    <img src="styles/legend/fp_cai_5_5.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_tl_2024_60_tract_1.setVisible(true);lyr_SpaceX_BSL_Awards_2.setVisible(true);lyr_ASTCA_BSL_Awards_3.setVisible(true);lyr_Bluesky_BSL_Awards_4.setVisible(true);lyr_fp_cai_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_tl_2024_60_tract_1,lyr_SpaceX_BSL_Awards_2,lyr_ASTCA_BSL_Awards_3,lyr_Bluesky_BSL_Awards_4,lyr_fp_cai_5];
lyr_tl_2024_60_tract_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'PROJECT FUNDING AREA', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_SpaceX_BSL_Awards_2.set('fieldAliases', {'location_id': 'BSL ID', 'tract': 'PFA ID', 'latitude': 'Latitude', 'longitude': 'Longtitude', 'premod_results': 'Classification', 'Awardee': 'Service Provider', });
lyr_ASTCA_BSL_Awards_3.set('fieldAliases', {'location_id': 'BSL ID', 'tract': 'PFA ID', 'latitude': 'Latitude', 'longitude': 'Longtitude', 'premod_results': 'Classdification', 'Awardee': 'Service Provider', });
lyr_Bluesky_BSL_Awards_4.set('fieldAliases', {'BSL_ID': 'BSL ID', 'PFA_ID': 'PFA ID', 'LATITUDE': 'Latitude', 'LONGITUDE': 'Longtiitude', 'CLASSIFICATION': 'Classification', 'Awardee': 'Service Provider', });
lyr_fp_cai_5.set('fieldAliases', {'type': 'TYPE Of CAI', 'entity_name': 'INSTITUTION NAME', 'location_id': 'BSL ID', 'project_id': 'PROJECT ID', 'address_primary': 'VILLAGE', 'city': 'CITY', 'state': 'state', 'zip_code': 'zip_code', 'latitude': 'LATITUDE', 'longitude': 'LONGTITUDE', 'technology': 'TECHNOLOGY TYPE', 'upload_speed_anticipated': 'UPLOAD SPEED', 'download_speed_anticipated': 'DOWNLOAD SPEED', });
lyr_tl_2024_60_tract_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_SpaceX_BSL_Awards_2.set('fieldImages', {'location_id': 'TextEdit', 'tract': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'premod_results': 'TextEdit', 'Awardee': 'TextEdit', });
lyr_ASTCA_BSL_Awards_3.set('fieldImages', {'location_id': 'TextEdit', 'tract': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'premod_results': 'TextEdit', 'Awardee': 'TextEdit', });
lyr_Bluesky_BSL_Awards_4.set('fieldImages', {'BSL_ID': 'TextEdit', 'PFA_ID': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'CLASSIFICATION': 'TextEdit', 'Awardee': 'TextEdit', });
lyr_fp_cai_5.set('fieldImages', {'type': 'TextEdit', 'entity_name': 'TextEdit', 'location_id': 'UniqueValues', 'project_id': 'TextEdit', 'address_primary': 'TextEdit', 'city': 'Hidden', 'state': 'Hidden', 'zip_code': 'Hidden', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'technology': 'TextEdit', 'upload_speed_anticipated': 'TextEdit', 'download_speed_anticipated': 'TextEdit', });
lyr_tl_2024_60_tract_1.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'GEOID': 'hidden field', 'GEOIDFQ': 'hidden field', 'NAME': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'inline label - always visible', 'INTPTLON': 'hidden field', });
lyr_SpaceX_BSL_Awards_2.set('fieldLabels', {'location_id': 'header label - visible with data', 'tract': 'header label - visible with data', 'latitude': 'header label - visible with data', 'longitude': 'header label - visible with data', 'premod_results': 'header label - visible with data', 'Awardee': 'header label - visible with data', });
lyr_ASTCA_BSL_Awards_3.set('fieldLabels', {'location_id': 'header label - visible with data', 'tract': 'header label - visible with data', 'latitude': 'header label - visible with data', 'longitude': 'header label - visible with data', 'premod_results': 'header label - visible with data', 'Awardee': 'header label - visible with data', });
lyr_Bluesky_BSL_Awards_4.set('fieldLabels', {'BSL_ID': 'header label - visible with data', 'PFA_ID': 'header label - visible with data', 'LATITUDE': 'header label - visible with data', 'LONGITUDE': 'header label - visible with data', 'CLASSIFICATION': 'header label - visible with data', 'Awardee': 'header label - visible with data', });
lyr_fp_cai_5.set('fieldLabels', {'type': 'header label - always visible', 'entity_name': 'header label - visible with data', 'location_id': 'header label - visible with data', 'project_id': 'header label - visible with data', 'address_primary': 'hidden field', 'latitude': 'header label - visible with data', 'longitude': 'header label - visible with data', 'technology': 'header label - visible with data', 'upload_speed_anticipated': 'header label - always visible', 'download_speed_anticipated': 'header label - visible with data', });
lyr_fp_cai_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});