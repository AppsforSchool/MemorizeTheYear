const isDebug = false;

const debugProblemsParams = ["2-1"];

const debugProblemsData = [
  {
    "unit": "2-1",
    "id": "21001",
    "event": "猿人がアフリカに現れる",
    "howToAnswer": "約◯万年から◯万年前",
    "year": "約700万年から600万年前"
  },
  {
    "unit": "2-1",
    "id": "21002",
    "event": "地球が寒冷化して氷河時代となる",
    "howToAnswer": "約◯万年前",
    "year": "約250万年前"
  },
  {
    "unit": "2-1",
    "id": "21003",
    "event": "原人が現れる",
    "howToAnswer": "約◯万年前",
    "year": "約200万年前"
  },
  {
    "unit": "2-1",
    "id": "21004",
    "event": "新人が現れる",
    "howToAnswer": "約◯万年前",
    "year": "約20万年前"
  },
  {
    "unit": "2-1",
    "id": "21005",
    "event": "最後の氷期が終わる",
    "howToAnswer": "約◯万年前",
    "year": "約1万年前"
  } /* ,
  {
    "unit": "2-1",
    "id": "21006",
    "event": "エジプトで統一王国ができる",
    "howToAnswer": "紀元前◯年ごろ",
    "year": "紀元前3000年ごろ"
  },
  {
    "unit": "2-1",
    "id": "21007",
    "event": "メソポタミアに都市国家がいくつも生まれる",
    "howToAnswer": "紀元前◯年ごろ",
    "year": "紀元前3000年ごろ"
  },
  {
    "unit": "2-1",
    "id": "21008",
    "event": "インダス文明が生まれる",
    "howToAnswer": "紀元前◯年ごろ",
    "year": "紀元前2500年ごろ"
  },
  {
    "unit": "2-1",
    "id": "21009",
    "event": "インダスで身分制度を持つ国々が生まれる",
    "howToAnswer": "紀元前◯年ごろ",
    "year": "紀元前1500年ごろ"
  },
  {
    "unit": "2-1",
    "id": "21010",
    "event": "中国で農耕文明が生まれる",
    "howToAnswer": "約◯万年前",
    "year": "約1万年前"
  },
  {
    "unit": "2-1",
    "id": "21011",
    "event": "中国で殷がおこる",
    "howToAnswer": "紀元前◯世紀ごろ",
    "year": "紀元前16世紀ごろ"
  },
  {
    "unit": "2-1",
    "id": "21012",
    "event": "殷が周にほろぼされる",
    "howToAnswer": "紀元前◯世紀",
    "year": "紀元前11世紀"
  },
  {
    "unit": "2-1",
    "id": "21013",
    "event": "中国が春秋・戦国時代になる",
    "howToAnswer": "紀元前◯世紀",
    "year": "紀元前8世紀"
  },
  {
    "unit": "2-1",
    "id": "21014",
    "event": "孔子が現れる",
    "howToAnswer": "紀元前◯世紀ごろ",
    "year": "紀元前6世紀ごろ"
  },
  {
    "unit": "2-1",
    "id": "21015",
    "event": "秦の王が中国を統一する",
    "howToAnswer": "紀元前◯世紀",
    "year": "紀元前3世紀"
  },
  {
    "unit": "2-1",
    "id": "21016",
    "event": "漢が中国を統一する",
    "howToAnswer": "紀元前◯世紀",
    "year": "紀元前2世紀ごろ"
  },
  {
    "unit": "2-1",
    "id": "21017",
    "event": "ギリシャ人が都市国家(ポリス)を造り始める",
    "howToAnswer": "紀元前◯世紀ごろ",
    "year": "紀元前8世紀ごろ"
  },
  {
    "unit": "2-1",
    "id": "21018",
    "event": "オリエントを統一したペルシャがギリシャに攻めこむ",
    "howToAnswer": "紀元前◯世紀",
    "year": "紀元前5世紀"
  },
  {
    "unit": "2-1",
    "id": "21019",
    "event": "北方のマケドニアがギリシャを征服する",
    "howToAnswer": "紀元前◯世紀",
    "year": "紀元前4世紀ごろ"
  },
  {
    "unit": "2-1",
    "id": "21020",
    "event": "アレクサンドロス大王が遠征しペルシャを征服する",
    "howToAnswer": "紀元前◯世紀",
    "year": "紀元前4世紀"
  },
  {
    "unit": "2-1",
    "id": "21021",
    "event": "ローマが王政を廃して共和政になる",
    "howToAnswer": "紀元前◯世紀",
    "year": "紀元前6世紀"
  },
  {
    "unit": "2-1",
    "id": "21022",
    "event": "ローマが地中海を囲む地域を統一",
    "howToAnswer": "紀元前◯年",
    "year": "紀元前30年"
  },
  {
    "unit": "2-1",
    "id": "21023",
    "event": "インドにシャカ(釈迦)が生まれる",
    "howToAnswer": "紀元前◯世紀ごろ",
    "year": "紀元前5世紀ごろ"
  },
  {
    "unit": "2-1",
    "id": "21024",
    "event": "ローマ帝国がキリスト教を国の宗教に定める",
    "howToAnswer": "◯世紀末",
    "year": "4世紀末"
  },
  {
    "unit": "2-1",
    "id": "21025",
    "event": "アラビア半島にムハンマドが生まれる",
    "howToAnswer": "◯世紀",
    "year": "6世紀"
  }*/
];

// ----- //
let questionsData = [];
let nowQuestionIndex = 0;


function getAllParmFromUrl(parm) {
  const params = new URLSearchParams(window.location.search);
  return params.getAll(parm);
}
function getParmFromUrl(parm) {
  const params = new URLSearchParams(window.location.search);
  return params.get(parm);
}







let problems;
let myListIds;
async function loadQuestionsData() {
  if (isDebug) {
    problems = debugProblemsParams;
  } else {
    problems = getAllParmFromUrl('problem');
    myListIds = getAllParmFromUrl('listId');
  }
  /*
  if (problems.length === 0 && myListIds.length === 0) {
    console.warn('無効なURLです。出題範囲が指定されていません。');
    // alert('無効なURLです。出題範囲が指定されていません。');
    // window.location.href = './index.html';
  }
  */
  
  if (isDebug) {
    questionsData = debugProblemsData;
  } else {
    const fetchPromises = [];
    
    fetchPromises.push(fetch('./2-1.json').then(res => res.json()));
    fetchPromises.push(fetch('./2-2.json').then(res => res.json()));
    fetchPromises.push(fetch('./2-3.json').then(res => res.json()));
    fetchPromises.push(fetch('./3-1.json').then(res => res.json()));
    fetchPromises.push(fetch('./3-2.json').then(res => res.json()));
    fetchPromises.push(fetch('./4-1.json').then(res => res.json()));
    fetchPromises.push(fetch('./4-2.json').then(res => res.json()));
    fetchPromises.push(fetch('./4-3.json').then(res => res.json()));
    fetchPromises.push(fetch('./5-1.json').then(res => res.json()));
    fetchPromises.push(fetch('./5-2.json').then(res => res.json()));
    fetchPromises.push(fetch('./5-3.json').then(res => res.json()));
    fetchPromises.push(fetch('./5-4.json').then(res => res.json()));
    fetchPromises.push(fetch('./6-1.json').then(res => res.json()));
    fetchPromises.push(fetch('./6-2.json').then(res => res.json()));
    fetchPromises.push(fetch('./6-3.json').then(res => res.json()));
    fetchPromises.push(fetch('./6-4.json').then(res => res.json()));
    fetchPromises.push(fetch('./7-1.json').then(res => res.json()));
    fetchPromises.push(fetch('./7-2.json').then(res => res.json()));
    fetchPromises.push(fetch('./7-3.json').then(res => res.json()));
    
    let allQuestionData;
    try {
      const results = await Promise.all(fetchPromises);
      allQuestionsData = results.flat();
    } catch (error) {
      console.error('JSONファイルの取得または処理に失敗しました:', error);
      alert('JSONファイルの取得または処理に失敗しました');
      window.location.href = './index.html';
    }
    
    questionsData = allQuestionsData.filter(item => shouldAdd(item));
  }
  
  
  
  
  questionsData = shuffle(questionsData);
  
  if (questionsData.length === 0) {
    console.error('問題がありません。');
    alert('問題がありません。');
    window.location.href = './index.html';
  }
  
  
  questionCountArea.textContent = questionsData.length;
  updateQuestion(0);
  
  loadingOverlay.classList.add('hidden');
  questionContainer.classList.remove('hidden');
}

function shouldAdd(item) {
    const isProblemsMember = problems.includes(item.unit);
    
    return isProblemsMember;
  }



function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // まだシャッフルしていない要素がある限りループを続ける
  while (currentIndex > 0) {

    // 残りの要素からランダムに1つ選ぶ
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 現在の要素と選んだ要素を交換する
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function updateQuestion(index) {
  cardFrontContent.textContent = questionsData[index]["event"];
  cardFrontSubContent.textContent = questionsData[index]["howToAnswer"];
  
  setTimeout(() => {
    cardBackQuestion.textContent = questionsData[index]["event"];
    cardBackContent.textContent = questionsData[index]["year"];
  }, 400);
  
  nowCountArea.textContent = index + 1;
}

function flipCard() {
  card.classList.toggle('flipped');
}



let returnButton;
document.addEventListener('DOMContentLoaded', () => {
  returnButton = document.getElementById('return-button');
  returnButton.addEventListener('click', () => {
    if (window.confirm('本当にやめますか？')) {
      window.location.href = './index.html';
    }
  });
});





let loadingOverlay, questionContainer;
let nowCountArea, questionCountArea;
let card, cardFrontContent, cardFrontSubContent, cardBackContent, cardBarkQuestion;
let showAnswerBtn, toIndexBtn, nextQuestionBtn;
document.addEventListener('DOMContentLoaded', async () => {
  loadingOverlay = document.getElementById('loading-overlay');
  questionContainer = document.getElementById('question-container');
  
  nowCountArea = document.getElementById('now-count');
  questionCountArea = document.getElementById('question-count');
  
  card = document.getElementById('card');
  cardFrontContent = document.getElementById('front-content');
  cardFrontSubContent = document.getElementById('front-sub-content');
  cardBackContent = document.getElementById('back-content');
  cardBackQuestion = document.getElementById('back-question-content');
  
  showAnswerBtn = document.getElementById('show-answer-btn');
  toIndexBtn = document.getElementById('to-index-btn');
  nextQuestionBtn = document.getElementById('next-question-btn');
  
  showAnswerBtn.addEventListener('click', () => {
    showAnswerBtn.disabled = true;
    nextQuestionBtn.disabled = true;
    setTimeout(() => {
      showAnswerBtn.disabled = false;
      nextQuestionBtn.disabled = false;
    }, 600);
    flipCard();
  });
  nextQuestionBtn.addEventListener('click', () => {
    showAnswerBtn.disabled = true;
    nextQuestionBtn.disabled = true;
    setTimeout(() => {
      showAnswerBtn.disabled = false;
      nextQuestionBtn.disabled = false;
    }, 600);
    
    if (nowQuestionIndex + 1 === questionsData.length) {
      cardFrontContent.textContent = '終了！';
      cardFrontSubContent.textContent = '';
      showAnswerBtn.classList.add('hidden');
      toIndexBtn.classList.remove('hidden');
    } else {
      nowQuestionIndex += 1;
      updateQuestion(nowQuestionIndex);
    }
    flipCard();
  });
  toIndexBtn.addEventListener('click', () => {
    window.location.href = './index.html';
  });
  

  await loadQuestionsData();
});