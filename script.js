document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('complaintForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const airline = document.getElementById('airline').value;
        const flightNumber = document.getElementById('flightNumber').value;
        const ticketNumber = document.getElementById('ticketNumber').value;
        const date = document.getElementById('date').value;
        const userName = document.getElementById('userName').value;

        generateComplaintLetter(airline, flightNumber, ticketNumber, date, userName);
    });

    function generateComplaintLetter(airline, flightNumber, ticketNumber, date, userName) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(12);

        let yPosition = 20;
        const lineHeight = 7;

        doc.text('Complaint Letter', 105, yPosition, { align: 'center' });
        yPosition += lineHeight * 2;

        doc.text(`Dear ${airline} Customer Service,`, 20, yPosition);
        yPosition += lineHeight * 2;

        doc.text('I am writing to express my dissatisfaction with the Wi-Fi service provided on my recent flight.', 20, yPosition);
        yPosition += lineHeight;
        doc.text('The details of my journey are as follows:', 20, yPosition);
        yPosition += lineHeight * 2;

        doc.text(`Airline: ${airline}`, 30, yPosition);
        yPosition += lineHeight;
        doc.text(`Flight Number: ${flightNumber}`, 30, yPosition);
        yPosition += lineHeight;
        doc.text(`Ticket Number: ${ticketNumber}`, 30, yPosition);
        yPosition += lineHeight;
        doc.text(`Date of Travel: ${date}`, 30, yPosition);
        yPosition += lineHeight * 2;

        doc.text('During this flight, I experienced extremely slow Wi-Fi speeds. This subpar internet connection', 20, yPosition);
        yPosition += lineHeight;
        doc.text('significantly hindered my ability to work and stay connected during the flight.', 20, yPosition);
        yPosition += lineHeight * 2;

        doc.text('I believe that in today\'s digital age, a reliable and fast internet connection is crucial, especially', 20, yPosition);
        yPosition += lineHeight;
        doc.text('for passengers who need to remain productive while traveling. The slow speed I encountered falls', 20, yPosition);
        yPosition += lineHeight;
        doc.text(`far below the standard one would expect from a reputable airline like ${airline}.`, 20, yPosition);
        yPosition += lineHeight * 2;

        doc.text('I kindly request that you look into this matter and provide an explanation for the poor Wi-Fi', 20, yPosition);
        yPosition += lineHeight;
        doc.text(`performance. Additionally, I would appreciate it if you could outline what steps ${airline} is`, 20, yPosition);
        yPosition += lineHeight;
        doc.text('taking to improve its in-flight Wi-Fi service for future passengers.', 20, yPosition);
        yPosition += lineHeight * 2;

        doc.text('Thank you for your attention to this matter. I look forward to your response and hope to see', 20, yPosition);
        yPosition += lineHeight;
        doc.text('improvements in your Wi-Fi service in the future.', 20, yPosition);
        yPosition += lineHeight * 2;

        doc.text('Sincerely,', 20, yPosition);
        yPosition += lineHeight;
        doc.text(userName, 20, yPosition);

        doc.save('wifi_complaint_letter.pdf');
    }
});