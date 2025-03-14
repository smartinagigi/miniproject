import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddIncome from './components/AddIncome';
import AddExpense from './components/AddExpense';
import AddRtransaction from './components/AddRtransaction';
import AddBudget from './components/AddBudget';
import ViewTransactionHistory from './components/ViewTransactionHistory';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addIncome" element={<AddIncome />} />
        <Route path="/addExpense" element={<AddExpense />} />
        <Route path="/addRtransaction" element={<AddRtransaction />} />
        <Route path="/addBudget" element={<AddBudget />} />
        <Route path="/viewTransactions" element={<ViewTransactionHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
