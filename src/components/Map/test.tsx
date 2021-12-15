import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {

  it('should render without any marker', () => {
    render(<Map />)

    // cria uma URL para renderizar o mapa
    screen.logTestingPlaygroundURL()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place]} />)

  })

})
