function attachButtonListeners() {
    let admin_button = document.getElementById("admin_button");
    let doctor_button = document.getElementById("doctor_button");
    let patient_button = document.getElementById("patient_button");
    if (admin_button) {
        admin_button.addEventListener("click", () => {
            localStorage.setItem("token", true);
            localStorage.setItem("userRole", "patient");
            window.location.href = '../templates/admin/adminDashboard.html';
        })
    }
    if (doctor_button) {
        doctor_button.addEventListener("click", () => {
            localStorage.setItem("token", true);
            localStorage.setItem("userRole", "doctor");
            window.location.href = '../templates/doctor/doctorDashboard.html';
        })
    }
    if (patient_button) {
        patient_button.addEventListener("click", () => {
            localStorage.setItem("token", true);
            localStorage.setItem("userRole", "doctor");
            window.location.href = 'pages/patientDashboard.html';
        })
    }
}
attachButtonListeners();