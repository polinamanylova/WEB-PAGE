document.getElementById('ratingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращает стандартное действие отправки формы
  let rating = document.querySelector('input[name="rating"]:checked').value; // Получаем выбранную оценку
  let averageGradeLabel = document.getElementById('averageGradeLabel');
  let currentAverage = parseFloat(averageGradeLabel.innerText); // Получаем текущее среднее арифметическое

  if (isNaN(currentAverage)) {
    currentAverage = 0; // Если среднего арифметического нет, устанавливаем его как 0
  }

  let newAverage = (currentAverage + parseFloat(rating)) / 2; // Вычисляем новое среднее арифметическое
  averageGradeLabel.innerText = newAverage.toFixed(1); // Выводим новое среднее арифметическое с округлением до одной десятой
});

document.getElementById('addSkillForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращает стандартное действие отправки формы
  let newSkill = document.getElementById('newSkill').value; // Получаем значение из поля "Добавить предложение"
  let authorInput = document.getElementById('authorInput').value; // Получаем значение из поля "Чем оно поможет?"
  let skillsList = document.getElementById('skillsList'); // Получаем список, куда будем добавлять новое предложение

  if (newSkill && authorInput) { // Проверяем, что оба поля заполнены
    let listItem = document.createElement('li'); // Создаем новый элемент списка
    listItem.textContent = newSkill + ' - ' + authorInput; // Устанавливаем текст элемента списка
    skillsList.appendChild(listItem); // Добавляем элемент списка в список
    document.getElementById('addSkillForm').reset(); // Очищаем поля формы
    alert("Предложение добавлено!"); // Выводим сообщение о добавлении предложения
  }
});
