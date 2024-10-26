namespace INIS {
  export interface IpInfo {
    ip: string
    isp: string
    info: number
    city: number
    status: string
    country: string
    province: string
    location: string
    infocode: number
    district: string
  }

  export interface GeocoderResult {
    formatted_address: string
    location: {
      lat: number
      lon: number
    }
    addressComponent: {
      poi: string
      city: string
      road: string
      nation: string
      address: string
      province: string
      city_code: string
      county_code: string
      poi_position: string
      poi_distance: number
      road_distance: number
      province_code: string
      address_distance: number
    }
  }

  export interface Geocoder {
    status: string
    msg: string
    result: INIS.GeocoderResult
  }
}
