

var UncleCharlie = UncleCharlie || {};

UncleCharlie.getQuadraticCurvePoint = function(firstPointX, firstPointY, controlPointX, controlPointY, endPointX, endPointY, position) {
  getQBezierValue = function(t, point1, point2, point3) {
    var iT = 1 - t;
    return iT * iT * point1 + 2 * iT * t * point2 + t * t * point3;
  }

  return { 
    x: getQBezierValue(position, firstPointX, controlPointX, endPointX), 
    y: getQBezierValue(position, firstPointY, controlPointY, endPointY) 
  };
}

UncleCharlie.getBezierCurvePoint = function(firstPointX, firstPointY, firstControlPointX, firstControlPointY, secondControlPointX, secondControlPointY, endPointX, endPointY, position){
  B1 = function(t) { return (t*t*t); }
  B2 = function(t) { return (3*t*t*(1-t)); } 
  B3 = function(t) { return (3*t*(1-t)*(1-t)); }
  B4 = function(t) { return ((1-t)*(1-t)*(1-t)); }

  return { 
    x: firstPointX * B1(position) + firstControlPointX * B2(position) + secondControlPointX * B3(position) + endPointX * B4(position),
    y: firstPointY * B1(position) + firstControlPointY * B2(position) + secondControlPointY * B3(position) + endPointY * B4(position)
  };
}