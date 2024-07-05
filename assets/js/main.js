let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = carousel.querySelectorAll('img').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    loadFeedbackStatus();
});

function toggleFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

function toggleFaq(element) {
    const answer = element.nextElementSibling;
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

function submitFeedback() {
    const feedback = {
        id: Math.floor(Math.random() * 1000),
        date: new Date().toLocaleDateString(),
        status: 'Recebido',
        responsePrediction: 'Em breve',
        attended: 'Não'
    };
    addFeedbackStatus(feedback);
    toggleFeedbackForm();
}

function loadFeedbackStatus() {
    const feedbacks = [
        { id: 1, date: '01/07/2024', status: 'Recebido', responsePrediction: '02/07/2024', attended: 'Sim' },
        { id: 2, date: '02/07/2024', status: 'Pendente', responsePrediction: '03/07/2024', attended: 'Não' },
        { id: 3, date: '03/07/2024', status: 'Em análise', responsePrediction: '04/07/2024', attended: 'Não' }
    ];
    feedbacks.forEach(feedback => addFeedbackStatus(feedback));
}

function addFeedbackStatus(feedback) {
    const table = document.getElementById('feedback-status-table');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${feedback.id}</td>
        <td>${feedback.date}</td>
        <td>${feedback.status}</td>
        <td>${feedback.responsePrediction}</td>
        <td>${feedback.attended}</td>
    `;
    table.appendChild(row);
}
