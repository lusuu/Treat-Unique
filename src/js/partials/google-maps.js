function gettingToUsMaps() {
    var latlng = new google.maps.LatLng(-17.756358,146.046035);

    var gettingToUsMapOptionsGeneral =
    {
		styles : [
		{
			featureType:"water",
			elementType:"geometry",
			stylers: [
				{color:"#e9e9e9"},
				{lightness:17}
			]
		}, 
		{
			featureType:"landscape",
			elementType:"geometry",
			stylers: [
				{color:"#f5f5f5"}, 
				{lightness:20}
			]
			},
			{ 	
				featureType:"road.highway",
				elementType:"geometry.fill", 
				stylers: [
					{color:"#ffffff"}, 
					{lightness:17}
				]
			},
			{ 
				featureType:"road.highway",
				elementType:"geometry.stroke",
				stylers: [
					{color:"#ffffff"},
					{lightness:29},
					{weight:0.2}
				]
			},
			{	
				featureType:"road.arterial",
				elementType:"geometry",
				stylers: [
					{color:"#ffffff"},
					{lightness:18}
				]
			},
			{
				featureType:"road.local",
				elementType:"geometry",
				stylers: [
					{color:"#ffffff"}, 
					{lightness:16}
				]
			},
			{	
				featureType:"poi",
				elementType:"geometry",
				stylers: [
					{color:"#f5f5f5"},
					{lightness:21}
				]
			},
			{ 
				featureType:"poi.park",
				elementType:"geometry",
				stylers: [
					{color:"#dedede"},
					{lightness:21}
				]
			},
			{
				elementType:"labels.text.stroke",
				stylers: [
					{visibility:"on"},
					{color:"#ffffff"}, 
					{lightness:16}
				]
			},
			{
				elementType:"labels.text.fill",
				stylers: [
					{saturation:36},
					{color:"#333333"},
					{lightness:40}
				]
			},
			{
				elementType:"labels.icon",
				stylers: [
					{visibility:"off"}
				]
			},
			{	
				featureType:"transit",
				elementType:"geometry",
				stylers: [
					{color:"#f2f2f2"},
					{lightness:19}
				]
			},
			{	
				featureType:"administrative",
				elementType:"geometry.fill",
				stylers: [
					{color:"#fefefe"},
					{lightness:20}
				]
			},
			{
				featureType:"administrative",
				elementType:"geometry.stroke",
				stylers: [
					{color:"#fefefe"},
					{lightness:17},
					{weight:1.2}
				]
			}
		], 
		zoom: 15,
		center: latlng, 
		main_color: '#007148',
		saturation_value: -1,
		brightness_value: 1,
		disableDefaultUI: true, 
		scrollwheel: false
    };

    var gettingToUsMapOptions =
    {
        zoom: 25
    };

    var gettingToUsMapOptionsMobile =
    {
        zoom: 15
    };

    var gettingToUsMap = new google.maps.Map(document.getElementById("getting-us-map"), gettingToUsMapOptionsGeneral, gettingToUsMapOptions);
    
    var gettingToUsMapMobile = new google.maps.Map(document.getElementById("getting-us-map-mobile"), gettingToUsMapOptionsGeneral, gettingToUsMapOptionsMobile);



    var image = 'img/mark.png';
	var imageMobile = 'img/mark-small.png';

    var gettingToUsMarker = new google.maps.Marker(
    {
        position: latlng,
        map: gettingToUsMap,
        icon: image
   });

    var gettingToUsMarkerMobile = new google.maps.Marker(
    {
        position: latlng,
        map: gettingToUsMapMobile,
        icon: imageMobile
    });
}


function contactsMaps() {
    var latlng = new google.maps.LatLng(-17.756358,146.046035);

    var contactMapOptionsGeneral =
    {
		styles : [
		{
			featureType:"water",
			elementType:"geometry",
			stylers: [
				{color:"#e9e9e9"},
				{lightness:17}
			]
		}, 
		{
			featureType:"landscape",
			elementType:"geometry",
			stylers: [
				{color:"#f5f5f5"}, 
				{lightness:20}
			]
			},
			{ 	
				featureType:"road.highway",
				elementType:"geometry.fill", 
				stylers: [
					{color:"#ffffff"}, 
					{lightness:17}
				]
			},
			{ 
				featureType:"road.highway",
				elementType:"geometry.stroke",
				stylers: [
					{color:"#ffffff"},
					{lightness:29},
					{weight:0.2}
				]
			},
			{	
				featureType:"road.arterial",
				elementType:"geometry",
				stylers: [
					{color:"#ffffff"},
					{lightness:18}
				]
			},
			{
				featureType:"road.local",
				elementType:"geometry",
				stylers: [
					{color:"#ffffff"}, 
					{lightness:16}
				]
			},
			{	
				featureType:"poi",
				elementType:"geometry",
				stylers: [
					{color:"#f5f5f5"},
					{lightness:21}
				]
			},
			{ 
				featureType:"poi.park",
				elementType:"geometry",
				stylers: [
					{color:"#dedede"},
					{lightness:21}
				]
			},
			{
				elementType:"labels.text.stroke",
				stylers: [
					{visibility:"on"},
					{color:"#ffffff"}, 
					{lightness:16}
				]
			},
			{
				elementType:"labels.text.fill",
				stylers: [
					{saturation:36},
					{color:"#333333"},
					{lightness:40}
				]
			},
			{
				elementType:"labels.icon",
				stylers: [
					{visibility:"off"}
				]
			},
			{	
				featureType:"transit",
				elementType:"geometry",
				stylers: [
					{color:"#f2f2f2"},
					{lightness:19}
				]
			},
			{	
				featureType:"administrative",
				elementType:"geometry.fill",
				stylers: [
					{color:"#fefefe"},
					{lightness:20}
				]
			},
			{
				featureType:"administrative",
				elementType:"geometry.stroke",
				stylers: [
					{color:"#fefefe"},
					{lightness:17},
					{weight:1.2}
				]
			}
		], 
		zoom: 15,
		center: latlng, 
		main_color: '#007148',
		saturation_value: -1,
		brightness_value: 1,
		disableDefaultUI: true, 
		scrollwheel: false
    };

    var contactMapOptions =
    {
        zoom: 25
    };

    var contactMapOptionsMobile =
    {
        zoom: 15
    };

    var contactMap = new google.maps.Map(document.getElementById("contacts-map"), contactMapOptionsGeneral, contactMapOptions);
    
    var contactMapMobile = new google.maps.Map(document.getElementById("contacts-map-mobile"), contactMapOptionsGeneral, contactMapOptionsMobile);



    var image = 'img/mark.png';
	var imageMobile = 'img/mark-small.png';

    var contactMarker = new google.maps.Marker(
    {
        position: latlng,
        map: contactMap,
        icon: image
   });

    var contactMarkerMobile = new google.maps.Marker(
    {
        position: latlng,
        map: contactMapMobile,
        icon: imageMobile
    });
}