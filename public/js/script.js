document.getElementById('selectAll').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[name="selectedIds"]');
    checkboxes.forEach(checkbox => checkbox.checked = this.checked);
});

// Search functionality for packages
document.getElementById('searchBox').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const packageName = row.querySelector('td:nth-child(3)').textContent.toLowerCase(); // Name is in the 3rd column
        if (packageName.includes(searchQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const editTypeModal = document.getElementById('editTypeModal');
    if (editTypeModal) {
        // Trigger function when the modal is about to show
        editTypeModal.addEventListener('show.bs.modal', function (event) {
            console.log("Modal is opening"); // For testing

            // Button that triggered the modal
            const button = event.relatedTarget;

            // Extract data attributes from the button
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            console.log("ID:", id, "Name:", name); // Check if these values are correct

            // Assign values to modal input fields
            const subjectTypeIdInput = editTypeModal.querySelector('#subjectTypeId');
            const subjectTypeNameInput = editTypeModal.querySelector('#subjectTypeName');
            subjectTypeIdInput.value = id;
            subjectTypeNameInput.value = name;
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Select the modal elements
    const editSubjectModal = document.getElementById('editSubjectModal');
    
    // Event listener for when the modal is shown
    editSubjectModal.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget; // Button that triggered the modal
        const subjectId = button.getAttribute('data-id');
        const subjectName = button.getAttribute('data-name');
        const subjectDescription = button.getAttribute('data-description');
        const subjectImgUrl = button.getAttribute('data-img_url');
        const subjectTypeId = button.getAttribute('data-type_id');
        
        // Set the modal's input fields to the current values
        document.getElementById('editSubjectId').value = subjectId;
        document.getElementById('editSubjectName').value = subjectName;
        document.getElementById('editSubjectDescription').value = subjectDescription;
        document.getElementById('editSubjectImg').value = subjectImgUrl;

        // Set the selected option for the subject type
        const subjectTypeSelect = document.getElementById('editSubjectType');
        for (let i = 0; i < subjectTypeSelect.options.length; i++) {
            if (subjectTypeSelect.options[i].value == subjectTypeId) {
                subjectTypeSelect.selectedIndex = i;
                break;
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select the modal elements for editing a package
    const editPackageModal = document.getElementById('editPackageModal');
    
    // Event listener for when the modal is shown
    editPackageModal.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget; // Button that triggered the modal
        const packageId = button.getAttribute('data-id');
        const packageName = button.getAttribute('data-name');
        const packageDescription = button.getAttribute('data-description');
        const packagePrice = button.getAttribute('data-price');
        const packageSubjectId = button.getAttribute('data-subject_id');
        
        // Set the modal's input fields to the current values
        document.getElementById('editPackageId').value = packageId;
        document.getElementById('editPackageName').value = packageName;
        document.getElementById('editPackageDescription').value = packageDescription;
        document.getElementById('editPackagePrice').value = packagePrice;

        // Set the selected option for the subject (which is linked to the package)
        const packageSubjectSelect = document.getElementById('editPackageSubject');
        for (let i = 0; i < packageSubjectSelect.options.length; i++) {
            if (packageSubjectSelect.options[i].value == packageSubjectId) {
                packageSubjectSelect.selectedIndex = i;
                break;
            }
        }
    });
});