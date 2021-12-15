import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => {
  const position: LatLngExpression = [0, 0]

  return (
    <MapContainer
      center={[0, 0]}
      zoom={ 3 }
      scrollWheelZoom={true}
      style={{height: '100%', width: '100%'}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        places?.map(({ id, name, location }) => {
          const { latitude, longitude } = location

          return (
            <Marker
              key={id}
              position={[latitude, longitude]}
              title={name}
            >
              <Popup>
                {name}
              </Popup>
            </Marker>
          )
        })
      }

    </MapContainer>
  )
}

export default Map
