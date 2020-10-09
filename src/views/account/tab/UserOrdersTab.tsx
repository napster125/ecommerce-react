import React from 'react';

// Just add this feature if you want :P

const UserOrdersTab: React.FC = () => (
	<div className="loader" style={{ minHeight: '80vh' }}>
		<h3>My Orders</h3>
		<strong><span className="text-subtle">You don't have any orders</span></strong>
	</div>
);

export default UserOrdersTab;
