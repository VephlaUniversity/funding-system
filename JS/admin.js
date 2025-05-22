document.addEventListener("DOMContentLoaded", () => {
  fetchApplications();
});

function fetchApplications() {
  fetch('backend/get_applications.php')
    .then(response => response.json())
    .then(data => populateTable(data))
    .catch(err => {
      console.error(err);
      alert("Failed to load applications.");
    });
}

function populateTable(applications) {
  const tableBody = document.getElementById("tableBody");
  const tableHeader = document.getElementById("tableHeader");

  if (applications.length === 0) {
    tableBody.innerHTML = "<tr><td colspan='100%'>No applications found.</td></tr>";
    return;
  }

  // Generate table headers dynamically
  const columns = Object.keys(applications[0]);
  columns.push('Action'); // Add Action column
  tableHeader.innerHTML = columns.map(col => `<th>${col}</th>`).join('');

  // Generate rows
  tableBody.innerHTML = applications.map(app => {
    const row = columns.map(col => {
      if (col === 'Action') {
        return `
          <td>
            <select id="status-${app.id}">
              <option value="pending" ${app.status === 'pending' ? 'selected' : ''}>Pending</option>
              <option value="approved" ${app.status === 'approved' ? 'selected' : ''}>Approved</option>
              <option value="declined" ${app.status === 'declined' ? 'selected' : ''}>Declined</option>
            </select>
            <button onclick="updateStatus(${app.id})">Update</button>
          </td>
        `;
      } else {
        return `<td>${app[col] || ''}</td>`;
      }
    }).join('');
    return `<tr>${row}</tr>`;
  }).join('');
}

function updateStatus(id) {
  const selectedStatus = document.getElementById(`status-${id}`).value;
  const formData = new FormData();
  formData.append('id', id);
  formData.append('status', selectedStatus);

  fetch('backend/update_status.php', {
    method: 'POST',
    body: formData
  })
    .then(res => res.text())
    .then(data => {
      alert(data);
      fetchApplications(); // Refresh table
    })
    .catch(err => {
      console.error(err);
      alert("Failed to update status.");
    });
}
