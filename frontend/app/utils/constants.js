/**
 * GooglePlacesServiceStatus - Google Places Service Status
 * Es un enumerable que contiene los posibles valores de estado de la respuesta de la API de Google Places.
 * Revisar la documentación oficial de Google Places API para más información.
 * https://developers.google.com/maps/documentation/javascript/reference/places-service?hl=es-419#PlacesServiceStatus.OK
 *  */

const GooglePlacesServiceStatus = {
  OK: 'OK',
  INVALID_REQUEST: 'INVALID_REQUEST',
  OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
  REQUEST_DENIED: 'REQUEST_DENIED',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  ZERO_RESULTS: 'ZERO_RESULTS',
  NOT_FOUND: 'NOT_FOUND'
}

export default GooglePlacesServiceStatus
