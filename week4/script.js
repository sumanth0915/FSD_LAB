function fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    fetch(apiUrl)
      .then(response => response.json())  
      .then(data => {
        const tableBody = document.querySelector('#usersTable tbody');
        tableBody.innerHTML = '';  
  
        data.forEach(function(user) {
          const row = document.createElement('tr');
  
          const id = user.id;
          const name = user.name;
          const username = user.username;
          const email = user.email;
  
          row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
          `;
  
          tableBody.appendChild(row); 
        });
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
      });
  }
  