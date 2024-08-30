import React, { useState } from 'react';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import './App.css';

const App = () => {
const [customers, setCustomers] = useState([]);
const addCustomer = (customer) => {
setCustomers([...customers, customer]);
};
return (
<div>
<h1>Customer Management</h1>
<CustomerForm addCustomer={addCustomer} />
<CustomerList customers={customers} />
</div>
);
};
export default App;