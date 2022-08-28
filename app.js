const quiz = [
 {
    question :"トラリピという名で有名になったFX証券会社は次のうちどれ？",
    answers: [
    "マネーパートナーズ",
    "マネックス証券",
    "マネースクエア",
    "マネすんな昇竜拳"
    ],
    correct:"マネースクエア"
 },{
    question :"FXの海外での呼ばれ方は？（短縮形）",
    answers: [
    "FOREX",
    "ForX",
    "FX",
    "FOX"
    ],
    correct:"FOREX"
 },{
    question :"めがねこが運営しているブログサイトの名称は？",
    answers: [
    "手動トラリピマンセー",
    "手動トラリピのすすめ",
    "めがねこの手動トラリピのすゝめ",
    "めがねこの手動トラリピのすすめ"
    ],
    correct:"めがねこの手動トラリピのすゝめ"
 },{
    question :"オージーキウイはどの国とどの国の通貨ペア？",
    answers: [
    "日本とアメリカ",
    "ニュージーランドと中国",
    "オーストラリアとキプロス",
    "オーストラリアとニュージーランド"
    ],
    correct:"オーストラリアとニュージーランド"
 }
 ];

 const quizLength = quiz.length;
 let quizIndex = 0;
let score = 0;

//問題と回答のかき出し
const $button = document.getElementsByTagName(`button`)

const setupQuiz = () => {
    document.getElementById(`js-question`).textContent = quiz[quizIndex].question ;
for (let i=0; i<$button.length; i++) {
    $button[i].textContent = quiz[quizIndex].answers[i] ;
}   
}
setupQuiz();



//クリック判定

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert(`大当たり!`);
        score++;
    }else{
        window.alert(`ハズレ!`);
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        //問題がまだあればこちらを実行
        setupQuiz();
    }else{
        //問題が終了したらこちらを実行
        window.alert(`クイズおいしまい あなたの正解数は${score}/${quizLength}です`);
    }
};

for (let bi=0; bi<$button.length; bi++) {
    $button[bi].addEventListener(`click`,(e) => {
   clickHandler(e); 
})
};

