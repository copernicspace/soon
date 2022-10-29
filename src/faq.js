document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";

            // Close all answers
            document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");

            // Open the clicked answer if it was closed
            if (!isOpen) {
                answer.style.display = "block";
            }
        });
    });
});
