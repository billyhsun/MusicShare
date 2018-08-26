var citymap;

export function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
	const coords = {'lat': position.coords.latitude, 'lng': position.coords.longitude};
    return coords;
}

// checkPoint is the spotify user
// centerPoint is the spotify host
export function arePointsNear(checkPoint, centerPoint, km) {
    alert( checkPoint );
    var ky = 40000 / 360;
    var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    window.alert(checkPoint, "hi");
    var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;

    return (Math.sqrt(dx * dx + dy * dy) <= km);
}


