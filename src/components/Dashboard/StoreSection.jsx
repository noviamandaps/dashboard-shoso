import React from 'react'
import StoreCard from '../StoreCard/StoreCard'

const StoreSection = () => {
  const stores = [
    {
      id: 1,
      image: './assets/images/adidas.png',
      alt: 'Adidas Store',
      logo: './assets/images/adidas_logo.png',
      logoAlt: 'Adidas Logo',
      name: 'Adidas Store',
      username: '@adidasindonesia',
      isFollowing: true,
      stats: {
        totalShoes: '1.569',
        totalFollowers: '5.2M',
        exclusiveShoes: '56'
      }
    },
    {
      id: 2,
      image: './assets/images/puma.png',
      alt: 'Puma Store',
      logo: './assets/images/puma_logo.png',
      logoAlt: 'Puma Logo',
      name: 'Puma Store',
      username: '@pumaid',
      isFollowing: false,
      stats: {
        totalShoes: '1.362',
        totalFollowers: '5.7M',
        exclusiveShoes: '76'
      }
    }
  ]

  return (
    <section className="d-flex flex-column gap-4 mb-5">
      <h4 className="title-section-content">Best Store In This Month</h4>
      <div className="d-flex gap-4 flex-wrap">
        {stores.map((store) => (
          <StoreCard key={store.id} {...store} />
        ))}
      </div>
    </section>
  )
}

export default StoreSection