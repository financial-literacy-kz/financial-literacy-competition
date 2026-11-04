// ================= ПРАКТИКА (ҚАЗАҚ ТІЛІНДЕ) =================

const PRACTICE_DATA_KZ = {
  // 1-КЕЗЕҢ: 15 балл (2 сұрақ)
  stage1: {
    maxPoints: 15,
    tasks: [
      { 
        id: "kz-s1-q1", 
        text: "Отбасының жалпы айлық кірісін есептеңіз.", 
        correctAnswer: 1132000, 
        points: 8, 
        type: "number",
        hint: "Соманы теңгемен енгізіңіз (тек сан)"
      },
      { 
        id: "kz-s1-q2", 
        text: "Отбасының еңбек қызметінен түсетін кірісін анықтаңыз.", 
        correctAnswer: 1000000, 
        points: 7, 
        type: "number",
        hint: "Соманы теңгемен енгізіңіз (тек сан)"
      }
    ]
  },

  // 2-КЕЗЕҢ: 15 балл (2 сұрақ)
  stage2: {
    maxPoints: 15,
    tasks: [
      { 
        id: "kz-s2-q1", 
        text: "Жинақтарды қоса алғанда, жалпы айлық шығыстарды есептеңіз.", 
        correctAnswer: 678000, 
        points: 8, 
        type: "number",
        hint: "Соманы теңгемен енгізіңіз (тек сан)"
      },
      { 
        id: "kz-s2-q2", 
        text: "Барлық жоспарланған шығыстардан кейін қалатын ақшалай қаражатты анықтаңыз.", 
        correctAnswer: 454000, 
        points: 7, 
        type: "number",
        hint: "Соманы теңгемен енгізіңіз (тек сан)"
      }
    ]
  },

  // 3-КЕЗЕҢ: 20 балл (2 сұрақ)
  stage3: {
    maxPoints: 20,
    tasks: [
      { 
        id: "kz-s3-q1", 
        text: "Барлық жоспарланған шығыстардың жалпы кірістегі үлесін пайызбен есептеңіз. (Жауапты %-бен, жүздікке дейін дөңгелектеңіз)", 
        correctAnswer: 59.89, 
        points: 10, 
        type: "number",
        hint: "Мысалы: 59.89"
      },
      { 
        id: "kz-s3-q2", 
        text: "Жинақтардың отбасының жалпы кірісіндегі үлесін анықтаңыз. (Жауапты %-бен, жүздікке дейін дөңгелектеңіз)", 
        correctAnswer: 7.07, 
        points: 10, 
        type: "number",
        hint: "Мысалы: 7.07"
      }
    ]
  },

  // 4-КЕЗЕҢ: 25 балл (3 сұрақ)
  stage4: {
    maxPoints: 25,
    tasks: [
      { 
        id: "kz-s4-q1", 
        text: "120 000 теңге алынғаннан кейін депозитте қанша қаражат қалады, егер онда тек 80 000 теңге болса? (Жетіспесе, -40000 деп жазыңыз)", 
        correctAnswer: -40000, 
        points: 8, 
        type: "number",
        hint: "Жетіспесе, теріс сан енгізіңіз"
      },
      { 
        id: "kz-s4-q2", 
        text: "Экскурсия шығынын ескере отырып, келесі айдың жоспарланған шығындары қанша теңгеге артады? (Жалпы шығын сомасын енгізіңіз)", 
        correctAnswer: 718000, 
        points: 8, 
        type: "number",
        hint: "Экскурсияны қосқандағы жалпы шығын"
      },
      { 
        id: "kz-s4-q3", 
        text: "Экскурсияны шығындарға қосқаннан кейін бюджеттің қалдығы қанша болады? (Соманы теңгемен енгізіңіз)", 
        correctAnswer: 414000, 
        points: 9, 
        type: "number",
        hint: "Кіріс минус жаңа шығындар"
      }
    ]
  },

  // 5-КЕЗЕҢ: 25 балл (3 сұрақ)
  stage5: {
    maxPoints: 25,
    tasks: [
      { 
        id: "kz-s5-q1", 
        text: "Егер отбасы келесі айда депозитті 120 000 теңгеге толықтырса, бюджеттің қалдығы қанша болады? (Соманы теңгемен енгізіңіз)", 
        correctAnswer: 294000, 
        points: 10, 
        type: "number",
        hint: "Барлық шығындар, жинақтар және депозитті толықтыруды қоса алғанда"
      },
      { 
        id: "kz-s5-q2", 
        text: "Жинақтарға 20 000 теңге бағыттау үшін көңіл көтеру мен көлік шығындарын қанша теңгеге қысқартуға болады? (Қысқарту сомасын теңгемен енгізіңіз)", 
        correctAnswer: 20000, 
        points: 7, 
        type: "number",
        hint: "Қысқарту сомасын теңгемен енгізіңіз"
      },
      { 
        id: "kz-s5-q3", 
        text: "Егер отбасы ай сайын 80 000 теңгеден жинаса, бір жылда қанша жинақ болады? (Соманы теңгемен енгізіңіз)", 
        correctAnswer: 960000, 
        points: 8, 
        type: "number",
        hint: "80 000 * 12"
      }
    ]
  }
};

// ================= БАЛЛДАРДЫ ЕСЕПТЕУ ЖӘНЕ ТЕКСЕРУ ФУНКЦИЯСЫ =================
function calculatePracticeScoreKZ(userAnswers) {
  let totalScore = 0;
  let details = [];

  for (const stageKey in PRACTICE_DATA_KZ) {
    const stage = PRACTICE_DATA_KZ[stageKey];
    let stageScore = 0;

    stage.tasks.forEach(task => {
      const userAnswer = userAnswers[task.id];
      let isCorrect = false;

      if (userAnswer !== undefined && userAnswer !== null && userAnswer !== '') {
        // Пайдаланушының енгізуін тазалау
        const cleanAnswer = String(userAnswer).replace(/\s/g, '').replace(',', '.');
        const numAnswer = parseFloat(cleanAnswer);
        
        // Дұрыс жауаппен салыстыру (бөлшек сандар үшін аздаған қателікке жол беру)
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

// ================= НӘТИЖЕНІ GOOGLE SHEETS-КЕ ЖІБЕРУ =================
async function sendPracticeScoreKZ(pid, name, scoreData) {
  const SHEETDB_URL = 'https://sheetdb.io/api/v1/qn0l3w36mohfb'; // Сіздің сілтемеңіз
  
  try {
    const response = await fetch(SHEETDB_URL, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [{
          id: pid,
          name: name,
          variant: 'Практика (KZ)',
          score: scoreData.totalScore + ' / ' + scoreData.maxScore,
          score_points: scoreData.totalScore,
          correct: scoreData.details.filter(d => d.isCorrect).length,
          incorrect: scoreData.details.filter(d => !d.isCorrect).length,
          time: new Date().toLocaleTimeString('ru-RU'),
          status: 'Практика аяқталды'
        }]
      })
    });
    
    return await response.json();
  } catch (error) {
    console.error("Практиканы жіберу қатесі:", error);
    return { error: error.toString() };
  }
}
