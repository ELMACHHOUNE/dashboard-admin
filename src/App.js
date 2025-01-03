import React, { Component } from 'react';
import './styles/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/auth/Login';
import Singup from './pages/auth/Singup';
import Dashboard from './pages/dashboard/Dashboard';
import AddTopic from './pages/topic/add/AddTopic';
import TopicList from './pages/topic/list/TopicList';
import AddAds from './pages/ads/add/AddAds';
import AdsList from './pages/ads/list/AdsList';
import AddPrice from './pages/pricing/add/AddPrice';
import PricingList from './pages/pricing/list/PricingList';
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Define your main routes */}
          <Route path="/" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-topic" element={<AddTopic />} />
          <Route path="/topic-list" element={<TopicList />} />
          <Route path="/add-ads" element={<AddAds />} />
          <Route path="/ads-list" element={<AdsList />} />
          <Route path="/add-pricing" element={<AddPrice />} />
          <Route path="/pricing-list" element={<PricingList />} />

          {/* Catch-all route for 404 error, must be last */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
