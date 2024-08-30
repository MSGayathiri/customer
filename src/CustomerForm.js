import React, { useState } from 'react';
const CustomerForm = ({ addCustomer }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
if (name && email) {
addCustomer({ name, email });
setName('');
setEmail('');
}
};
return (
<form onSubmit={handleSubmit}>
<h2>Add New Customer</h2>
<div>
<label>Name:</label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
</div>
<div>
<label>Email:</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</div>
<button type="submit">Add Customer</button>
</form>
);
};
export default CustomerForm;