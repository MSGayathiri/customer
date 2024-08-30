
import React from 'react';
const CustomerList = ({ customers }) => {
return (
<div>
<h2>Customer List</h2>
<ul>
{customers.map((customer, index) => (
<li key={index}>
{customer.name} - {customer.email}
</li>
))}
</ul>
</div>
);
};
export default CustomerList;