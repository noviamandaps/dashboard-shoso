import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <>
      {/* Navigation Header */}
      <section>
        <button
          aria-controls="sidebar"
          aria-label="Button Hamburger"
          className="sidebarOffcanvas mb-5 btn p-0 border-0 d-flex d-lg-none"
          style={{ background: 'none', border: 'none', fontSize: '24px', color: 'var(--navy)' }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <nav className="nav-content">
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <img
              src="/assets/images/photo.webp"
              alt="Photo Profile"
              className="photo-profile"
            />
            <div>
              <p className="title-content" style={{ marginBottom: '8px' }}>Settings</p>
              <p className="subtitle-content">
                Manage your account preferences and settings
              </p>
            </div>
          </div>
        </nav>
      </section>

      {/* Settings Content */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h4 className="title-section-content">Account Settings</h4>
        
        {/* Settings Tabs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('profile')}
            className={`button btn-rounded ${activeTab === 'profile' ? 'active' : ''}`}
            style={{ borderRadius: '25px' }}
          >
            Profile Information
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`button btn-rounded ${activeTab === 'notifications' ? 'active' : ''}`}
            style={{ borderRadius: '25px' }}
          >
            Notifications
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`button btn-rounded ${activeTab === 'privacy' ? 'active' : ''}`}
            style={{ borderRadius: '25px' }}
          >
            Privacy
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`button btn-rounded ${activeTab === 'preferences' ? 'active' : ''}`}
            style={{ borderRadius: '25px' }}
          >
            Preferences
          </button>
        </div>
        
        {/* Profile Settings */}
        {activeTab === 'profile' && (
          <div style={{ backgroundColor: 'var(--white)', padding: '24px', borderRadius: '12px', border: '1px solid var(--grayish)' }}>
            <h5 style={{ marginBottom: '20px', color: 'var(--navy)' }}>Profile Information</h5>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <img
                src="/assets/images/photo.webp"
                alt="Profile Photo"
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  objectFit: 'cover' 
                }}
              />
              <button className="button btn-rounded" style={{ borderRadius: '25px' }}>
                Change Photo
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: '500' }}>First Name</label>
                <input
                  type="text"
                  defaultValue="Yeager"
                  className="form-control"
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: '500' }}>Last Name</label>
                <input
                  type="text"
                  defaultValue="Eren"
                  className="form-control"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: '500' }}>Email Address</label>
              <input
                type="email"
                defaultValue="yeager.eren@example.com"
                className="form-control"
                style={{ width: '100%' }}
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: '500' }}>Phone Number</label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="form-control"
                style={{ width: '100%' }}
              />
            </div>
            
            <button className="button btn-rounded active" style={{ borderRadius: '25px' }}>
              Save Changes
            </button>
          </div>
        )}
        
        {/* Notification Settings */}
        {activeTab === 'notifications' && (
          <div style={{ backgroundColor: 'var(--white)', padding: '24px', borderRadius: '12px', border: '1px solid var(--grayish)' }}>
            <h5 style={{ marginBottom: '20px', color: 'var(--navy)' }}>Notification Preferences</h5>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--grayish)' }}>
                <div>
                  <p style={{ margin: '0', color: 'var(--navy)', fontWeight: '500' }}>Order Updates</p>
                  <p style={{ margin: '0', color: 'var(--gray)', fontSize: '14px' }}>Get notified about your order status</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--grayish)' }}>
                <div>
                  <p style={{ margin: '0', color: 'var(--navy)', fontWeight: '500' }}>Promotional Emails</p>
                  <p style={{ margin: '0', color: 'var(--gray)', fontSize: '14px' }}>Receive emails about sales and new products</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--grayish)' }}>
                <div>
                  <p style={{ margin: '0', color: 'var(--navy)', fontWeight: '500' }}>Auction Alerts</p>
                  <p style={{ margin: '0', color: 'var(--gray)', fontSize: '14px' }}>Get notified about auction updates</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
                <div>
                  <p style={{ margin: '0', color: 'var(--navy)', fontWeight: '500' }}>Push Notifications</p>
                  <p style={{ margin: '0', color: 'var(--gray)', fontSize: '14px' }}>Receive browser notifications</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            
            <button className="button btn-rounded active" style={{ borderRadius: '25px', marginTop: '20px' }}>
              Save Preferences
            </button>
          </div>
        )}
        
        {/* Privacy Settings */}
        {activeTab === 'privacy' && (
          <div style={{ backgroundColor: 'var(--white)', padding: '24px', borderRadius: '12px', border: '1px solid var(--grayish)' }}>
            <h5 style={{ marginBottom: '20px', color: 'var(--navy)' }}>Privacy Settings</h5>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: '500' }}>Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  style={{ width: '100%' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: '500' }}>New Password</label>
                <input
                  type="password"
                  className="form-control"
                  style={{ width: '100%' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: '500' }}>Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  style={{ width: '100%' }}
                />
              </div>
              
              <button className="button btn-rounded active" style={{ borderRadius: '25px' }}>
                Update Password
              </button>
            </div>
            
            <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid var(--grayish)' }} />
            
            <h6 style={{ marginBottom: '16px', color: 'var(--navy)' }}>Two-Factor Authentication</h6>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ margin: '0', color: 'var(--navy)' }}>Protect your account with 2FA</p>
                <p style={{ margin: '0', color: 'var(--gray)', fontSize: '14px' }}>Currently disabled</p>
              </div>
              <button className="button btn-rounded" style={{ borderRadius: '25px' }}>
                Enable
              </button>
            </div>
          </div>
        )}
        
        {/* General Preferences */}
        {activeTab === 'preferences' && (
          <div style={{ backgroundColor: 'var(--white)', padding: '24px', borderRadius: '12px', border: '1px solid var(--grayish)' }}>
            <h5 style={{ marginBottom: '20px', color: 'var(--navy)' }}>General Preferences</h5>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: '500' }}>Language</label>
                <select className="form-control" style={{ width: '100%' }}>
                  <option>English (US)</option>
                  <option>Indonesian</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: '500' }}>Currency</label>
                <select className="form-control" style={{ width: '100%' }}>
                  <option>IDR (Rp)</option>
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                  <option>JPY (¥)</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: '500' }}>Time Zone</label>
                <select className="form-control" style={{ width: '100%' }}>
                  <option>Asia/Jakarta (GMT+7)</option>
                  <option>America/New_York (GMT-5)</option>
                  <option>Europe/London (GMT+0)</option>
                  <option>Asia/Tokyo (GMT+9)</option>
                </select>
              </div>
              
              <button className="button btn-rounded active" style={{ borderRadius: '25px' }}>
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Settings;
