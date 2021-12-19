import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useRouter } from 'next/router'
import L from 'leaflet'

import * as S from './styles'

type Place = {
  id: string
  name: string
  slug: string
  visited: boolean
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID  = process.env.NEXT_PUBLIC_MAPBOX_USER_ID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
    )
    : (
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    )
}

const Map = ({ places }: MapProps) => {
  // const position: LatLngExpression = [0, 0]
  const router = useRouter()

  const markerIconVisited = new L.Icon({
    iconUrl: 'img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [0, 41],
    popupAnchor: [0, -41]
  })

  const markerIcon = new L.Icon({
    iconUrl: 'img/marker-icon-green.png',
    iconSize: [25, 41],
    iconAnchor: [0, 41],
    popupAnchor: [0, -41]
  })

  return (
    <S.MapWrapper>
      <MapContainer
        center={[0, 0]}
        zoom={ 3 }
        minZoom={ 3 }
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
        scrollWheelZoom={true}
        style={{height: '100%', width: '100%'}}
      >

        <CustomTileLayer />

        {
          places?.map(({ id, slug, name, location, visited }) => {
            const { latitude, longitude } = location

            return (
              <Marker
                key={ id }
                position={[latitude, longitude]}
                title={ name }
                icon={ visited ? markerIconVisited : markerIcon }
                eventHandlers={{
                  click: () => {
                    router.push(`/place/${ slug }`)
                  }
                }}

              />
            )
          })
        }
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
