// ================= ПРАКТИЧЕСКОЕ ЗАДАНИЕ (БАЛЛЫ И ОТВЕТЫ) =================

const PRACTICE_DATA = {
  // ЭТАП 1: 15 баллов (2 вопроса)
  stage1: {
    maxPoints: 15,
    tasks: [
      { 
        id: "s1-q1", 
        text: "Рассчитайте общий ежемесячный доход семьи.", 
        correctAnswer: 1132000, 
        points: 8, 
        type: "number",
        hint: "Введите сумму в тенге (только число)"
      },
      { 
        id: "s1-q2", 
        text: "Определите, какую сумму составляют трудовые доходы семьи.", 
        correctAnswer: 1000000, 
        points: 7, 
        type: "number",
        hint: "Введите сумму в тенге (только число)"
      }
    ]
  },

  // ЭТАП 2: 15 баллов (2 вопроса)
  stage2: {
    maxPoints: 15,
    tasks: [
      { 
        id: "s2-q1", 
        text: "Рассчитайте общую сумму ежемесячных расходов, включая накопления.", 
        correctAnswer: 678000, 
        points: 8, 
        type: "number",
        hint: "Введите сумму в тенге (только число)"
      },
      { 
        id: "s2-q2", 
        text: "Определите остаток денежных средств после всех запланированных расходов.", 
        correctAnswer: 454000, 
        points: 7, 
        type: "number",
        hint: "Введите сумму в тенге (только число)"
      }
    ]
  },

  // ЭТАП 3: 20 баллов (2 вопроса)
  stage3: {
    maxPoints: 20,
    tasks: [
      { 
        id: "s3-q1", 
        text: "Рассчитайте, какой процент общего дохода составляют все запланированные расходы. (Ответ в %, округлите до сотых)", 
        correctAnswer: 59.89, 
        points: 10, 
        type: "number",
        hint: "Например: 59.89"
      },
      { 
        id: "s3-q2", 
        text: "Определите долю накоплений в общем доходе семьи. (Ответ в %, округлите до сотых)", 
        correctAnswer: 7.07, 
        points: 10, 
        type: "number",
        hint: "Например: 7.07"
      }
    ]
  },

  // ЭТАП 4: 25 баллов (3 вопроса)
  stage4: {
    maxPoints: 25,
    tasks: [
      { 
        id: "s4-q1", 
        text: "Какая сумма останется на депозите после снятия 120 000 тенге, если на нём было только 80 000 тенге? (Если не хватает, напишите -40000)", 
        correctAnswer: -40000, 
        points: 8, 
        type: "number",
        hint: "Введите отрицательное число, если не хватает"
      },
      { 
        id: "s4-q2", 
        text: "На сколько увеличатся плановые расходы следующего месяца с учётом экскурсии? (Введите сумму в тенге)", 
        correctAnswer: 718000, 
        points: 8, 
        type: "number",
        hint: "Сумма расходов с учётом экскурсии"
      },
      { 
        id: "s4-q3", 
        text: "Какой остаток бюджета будет после включения экскурсии в расходы? (Введите сумму в тенге)", 
        correctAnswer: 414000, 
        points: 9, 
        type: "number",
        hint: "Доход минус новые расходы"
      }
    ]
  },

  // ЭТАП 5: 25 баллов (3 вопроса)
  stage5: {
    maxPoints: 25,
    tasks: [
      { 
        id: "s5-q1", 
        text: "Какой остаток бюджета будет, если семья восстановит депозит на 120 000 тенге в следующем месяце? (Введите сумму в тенге)", 
        correctAnswer: 294000, 
        points: 10, 
        type: "number",
        hint: "С учётом всех расходов, накоплений и восстановления депозита"
      },
      { 
        id: "s5-q2", 
        text: "На сколько процентов можно сократить расходы на развлечения и транспорт, чтобы направить 20 000 тенге на сбережения? (Сумма сокращения в тенге)", 
        correctAnswer: 20000, 
        points: 7, 
        type: "number",
        hint: "Введите сумму сокращения в тенге"
      },
      { 
        id: "s5-q3", 
        text: "Какая сумма накоплений будет у семьи, если она будет откладывать 80 000 тенге ежемесячно в течение года? (Введите сумму в тенге)", 
        correctAnswer: 960000, 
        points: 8, 
        type: "number",
        hint: "80 000 * 12"
      }
    ]
  }
};

// ================= ФУНКЦИЯ ДЛЯ ПРОВЕРКИ ОТВЕТОВ И НАЧИСЛЕНИЯ БАЛЛОВ =================
function calculatePracticeScore(userAnswers) {
  let totalScore = 0;
  let details = []; // Для отладки и отображения результата

  for (const stageKey in PRACTICE_DATA) {
    const stage = PRACTICE_DATA[stageKey];
    let stageScore = 0;

    stage.tasks.forEach(task => {
      const userAnswer = userAnswers[task.id];
      let isCorrect = false;

      if (userAnswer !== undefined && userAnswer !== null && userAnswer !== '') {
        // Очищаем ввод пользователя от пробелов и запятых
        const cleanAnswer = String(userAnswer).replace(/\s/g, '').replace(',', '.');
        const numAnswer = parseFloat(cleanAnswer);
        
        // Сравниваем с правильным ответом (допускаем небольшую погрешность для дробных чисел)
        if (Math.abs(numAnswer - task.correctAnswer) < 0.1) {
          isCorrect = true;
          stageScore += task.points;
        }
      }

      details.push({
        taskId: task.id,
        userAnswer: userAnswer,
        correctAnswer: task.correctAnswer,
        isCorrect: isCorrect,
        pointsEarned: isCorrect ? task.points : 0
      });
    });

    totalScore += stageScore;
  }

  return {
    totalScore: totalScore,
    maxScore: 100,
    details: details
  };
}

// ================= ФУНКЦИЯ ДЛЯ ОТПРАВКИ БАЛЛОВ В GOOGLE SHEETS =================
async function sendPracticeScore(pid, name, scoreData) {
  const SHEETDB_URL = 'https://sheetdb.io/api/v1/qn0l3w36mohfb'; // Ваша ссылка
  
  try {
    const response = await fetch(SHEETDB_URL, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [{
          id: pid,
          name: name,
          variant: 'Практика',
          score: scoreData.totalScore + ' / ' + scoreData.maxScore,
          score_points: scoreData.totalScore,
          correct: scoreData.details.filter(d => d.isCorrect).length,
          incorrect: scoreData.details.filter(d => !d.isCorrect).length,
          time: new Date().toLocaleTimeString('ru-RU'),
          status: 'Практика завершена'
        }]
      })
    });
    
    return await response.json();
  } catch (error) {
    console.error("Ошибка отправки практики:", error);
    return { error: error.toString() };
  }
}
