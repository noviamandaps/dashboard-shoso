import React from 'react'
import Header from './Header'
import ProductSection from './ProductSection'
import StoreSection from './StoreSection'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <main className="content">
      <Header />
      <ProductSection />
      <StoreSection />
    </main>
  )
}

export default Dashboard