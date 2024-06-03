document.addEventListener('DOMContentLoaded', function() {
    const customerForm = document.getElementById('customerForm');
    const customerList = document.getElementById('customerList');
  
    customerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
  
      addCustomer(name, email, phone);
      customerForm.reset();
    });
  
    function addCustomer(name, email, phone) {
      const customerDiv = document.createElement('div');
      customerDiv.classList.add('customer');
      customerDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `;
      customerList.appendChild(customerDiv);
    }
  });
  