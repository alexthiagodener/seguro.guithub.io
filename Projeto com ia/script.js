const topics = document.querySelectorAll('.topic');
topics.forEach(topic => {
  const description = topic.querySelector('.description');
  topic.addEventListener('click', () => {
    description.classList.toggle('open');
  });
});