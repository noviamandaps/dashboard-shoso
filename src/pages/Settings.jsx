import React, { useState } from 'react';
import Card from '../components/atoms/Card';
import Button from '../components/atoms/Button';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-900 mb-6">Account Settings</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0">
          <Card className="p-0 overflow-hidden">
            <nav className="flex flex-col">
              <button
                onClick={() => setActiveTab('profile')}
                className={`text-left px-4 py-3 border-l-4 ${
                  activeTab === 'profile' 
                    ? 'bg-primary-50 border-primary-600 text-primary-700'
                    : 'border-transparent hover:bg-neutral-50 text-neutral-700'
                }`}
              >
                Profile Information
              </button>
              <button
                onClick={() => setActiveTab('address')}
                className={`text-left px-4 py-3 border-l-4 ${
                  activeTab === 'address' 
                    ? 'bg-primary-50 border-primary-600 text-primary-700'
                    : 'border-transparent hover:bg-neutral-50 text-neutral-700'
                }`}
              >
                Shipping Addresses
              </button>
              <button
                onClick={() => setActiveTab('payment')}
                className={`text-left px-4 py-3 border-l-4 ${
                  activeTab === 'payment' 
                    ? 'bg-primary-50 border-primary-600 text-primary-700'
                    : 'border-transparent hover:bg-neutral-50 text-neutral-700'
                }`}
              >
                Payment Methods
              </button>
              <button
                onClick={() => setActiveTab('password')}
                className={`text-left px-4 py-3 border-l-4 ${
                  activeTab === 'password' 
                    ? 'bg-primary-50 border-primary-600 text-primary-700'
                    : 'border-transparent hover:bg-neutral-50 text-neutral-700'
                }`}
              >
                Password & Security
              </button>
              <button
                onClick={() => setActiveTab('preferences')}
                className={`text-left px-4 py-3 border-l-4 ${
                  activeTab === 'preferences' 
                    ? 'bg-primary-50 border-primary-600 text-primary-700'
                    : 'border-transparent hover:bg-neutral-50 text-neutral-700'
                }`}
              >
                Preferences
              </button>
            </nav>
          </Card>
        </div>
        
        {/* Content Area */}
        <div className="flex-1">
          {activeTab === 'profile' && (
            <Card>
              <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
              <div className="mb-6 flex items-center">
                <div className="w-20 h-20 rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden">
                  <img src="/assets/images/photo.webp" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <Button variant="outline" size="sm">Change Photo</Button>
                </div>
              </div>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full border border-neutral-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full border border-neutral-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full border border-neutral-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full border border-neutral-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button variant="primary">Save Changes</Button>
                </div>
              </form>
            </Card>
          )}
          
          {activeTab === 'address' && (
            <Card>
              <h2 className="text-xl font-semibold mb-4">Shipping Addresses</h2>
              <div className="space-y-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Home Address</p>
                      <p className="text-neutral-600">123 Main Street, Apt 4B</p>
                      <p className="text-neutral-600">New York, NY 10001</p>
                      <p className="text-neutral-600">United States</p>
                      <p className="text-neutral-600">Phone: (555) 123-4567</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="danger" size="sm">Delete</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-neutral-200 rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Work Address</p>
                      <p className="text-neutral-600">456 Business Ave, Floor 5</p>
                      <p className="text-neutral-600">New York, NY 10002</p>
                      <p className="text-neutral-600">United States</p>
                      <p className="text-neutral-600">Phone: (555) 987-6543</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="danger" size="sm">Delete</Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add New Address
                </Button>
              </div>
            </Card>
          )}
          
          {activeTab === 'payment' && (
            <Card>
              <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
              <div className="space-y-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-12 h-8 bg-neutral-800 rounded mr-3 flex items-center justify-center text-white font-bold">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4567</p>
                        <p className="text-neutral-500 text-sm">Expires 05/2028</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="danger" size="sm">Delete</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-neutral-200 rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-12 h-8 bg-neutral-800 rounded mr-3 flex items-center justify-center text-white font-bold">
                        MC
                      </div>
                      <div>
                        <p className="font-medium">Mastercard ending in 9876</p>
                        <p className="text-neutral-500 text-sm">Expires 11/2026</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="danger" size="sm">Delete</Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add New Payment Method
                </Button>
              </div>
            </Card>
          )}
          
          {activeTab === 'password' && (
            <Card>
              <h2 className="text-xl font-semibold mb-4">Password & Security</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Current Password</label>
                  <input
                    type="password"
                    className="w-full border border-neutral-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">New Password</label>
                  <input
                    type="password"
                    className="w-full border border-neutral-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full border border-neutral-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button variant="primary">Update Password</Button>
                </div>
              </form>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-700">Protect your account with two-factor authentication</p>
                  <p className="text-neutral-500 text-sm">Currently disabled</p>
                </div>
                <Button variant="outline">Enable</Button>
              </div>
            </Card>
          )}
          
          {activeTab === 'preferences' && (
            <Card>
              <h2 className="text-xl font-semibold mb-4">Preferences</h2>
              
              <h3 className="text-lg font-medium mb-3">Email Notifications</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <input id="orders" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500" defaultChecked />
                  <label htmlFor="orders" className="ml-2 text-neutral-700">Order updates</label>
                </div>
                <div className="flex items-center">
                  <input id="promos" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500" defaultChecked />
                  <label htmlFor="promos" className="ml-2 text-neutral-700">Promotions and sales</label>
                </div>
                <div className="flex items-center">
                  <input id="auction" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500" defaultChecked />
                  <label htmlFor="auction" className="ml-2 text-neutral-700">Auction alerts</label>
                </div>
                <div className="flex items-center">
                  <input id="newsletter" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                  <label htmlFor="newsletter" className="ml-2 text-neutral-700">Weekly newsletter</label>
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-3">Language & Region</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-700 mb-1">Language</label>
                <select className="w-full border border-neutral-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Japanese</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-1">Currency</label>
                <select className="w-full border border-neutral-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                  <option>JPY (¥)</option>
                  <option>CAD ($)</option>
                </select>
              </div>
              
              <div className="flex justify-end">
                <Button variant="primary">Save Preferences</Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
