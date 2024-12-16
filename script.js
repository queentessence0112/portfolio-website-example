// Update footer year dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// Example form handling script
// In a real scenario, you would handle form submissions via server-side code or APIs.
const contactForm = document.getElementById('contactForm');
const formFeedback = document.querySelector('.form-feedback');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate sending form data...
    setTimeout(() => {
        formFeedback.textContent = "Zahvaljujemo! Vaša poruka je uspješno poslana.";
        contactForm.reset();
    }, 1000);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => (slide.style.display = "none"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Basic Q&A pairs
const qaPairs = [
    {
      question: "cijen",
      answer: "Cijene fotografija variraju u odnosu na veličinu. Cijene slika veličine S iznose uglavnom 70 eura, M 120 eura i L 180 eura."
    },
    {
      question: "dostup", 
      answer: "Dostupan sam na instagramu, tiktoku i shopify trgovini. Linkovi su dostupni pod sekcijom 'kontaktiraj me'."
    },
    {
      question: "oprem",
      answer: "Od opreme koristim fotoaparat Sony Alpha a7 III, stativ Manfrotto Befree Advanced Carbon Fiber Tripod i tracker Sky-Watcher Star Adventurer 2i Pro Pack."
    },
  ];
  
  // Elements
  const chatbotIcon = document.getElementById('chatbotIcon');
  const chatbotWindow = document.getElementById('chatbotWindow');
  const chatbotClose = document.getElementById('chatbotClose');
  const chatbotMessages = document.getElementById('chatbotMessages');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotSendBtn = document.getElementById('chatbotSendBtn');
  
  // Toggle chatbot window
  chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = (chatbotWindow.style.display === 'block') ? 'none' : 'block';
    chatbotInput.focus();
  });
  
  chatbotClose.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
  });
  
  // Send message on button click or Enter key
  chatbotSendBtn.addEventListener('click', sendMessage);
  chatbotInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage !== '') {
      addMessage(userMessage, 'user');
      chatbotInput.value = '';
      setTimeout(() => {
        const botReply = getAnswer(userMessage);
        addMessage(botReply, 'bot');
        scrollToBottom();
      }, 500);
    }
  }
  
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chatbot-message', sender);
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    scrollToBottom();
  }
  
  function scrollToBottom() {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  function getAnswer(userMessage) {
    const lowerMsg = userMessage.toLowerCase();
    // Try to find a matching keyword in the user's question
    for (let i = 0; i < qaPairs.length; i++) {
      if (lowerMsg.includes(qaPairs[i].question)) {
        return qaPairs[i].answer;
      }
    }
    // Default fallback
    return "Ne razumijem pitanje. Molim postavite pitanje vezano uz dostupnosti autora, cijene fotografija i opremu.";
  }
  