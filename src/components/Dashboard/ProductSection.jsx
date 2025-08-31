import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductSection = () => {
  const products = [
    {
      id: 1,
      image: './assets/images/nike_red.png',
      alt: 'Nike Red',
      colors: '7 Colours',
      title: 'Nike Red Shoe 77',
      price: 'Rp 220.000',
      isFavorited: true,
      isPurchased: true
    },
    {
      id: 2,
      image: './assets/images/nike_airforce.png',
      alt: 'Nike Airforce',
      colors: '4 Colours',
      title: 'Nike Airforce uHigh',
      price: 'Rp 250.000',
      isFavorited: false,
      isPurchased: false
    },
    {
      id: 3,
      image: './assets/images/nike_kiger.png',
      alt: 'Nike Kiger',
      colors: '2 Colours',
      title: 'Nike Kiger 1 Mid',
      price: 'Rp 990.000',
      isFavorited: false,
      isPurchased: false
    }
  ]

  return (
    <section className="d-flex flex-column gap-4">
      <div className="d-flex justify-content-between align-items-center gap-3">
        <h4 className="title-section-content">Exclusive Product From Nike</h4>
        <a href="#" className="btn-link">View All Shoes</a>
      </div>
      <div className="d-flex gap-4 flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default ProductSection