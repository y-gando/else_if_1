
// 定数selectを定義し、HTML内にある「select」を代入
const select = document.querySelector('select');
// 定数paraを定義し、HTML内にある「p（pタグ）」を代入
const para = document.querySelector('p');

// userの操作によってフォームの値が変更されたとき、setWeather関数を適応する
select.addEventListener('change', setWeather);

// setWeather関数を実行
function setWeather() {
    // selectに入力された値をchoiceに代入
    const choice = select.value;

    // selectに入力された値がsunnyの場合、
    if (choice === 'sunny') {
        // paraには「'今日はとてもいい天気です。〜」が反映される
        para.textContent = '今日はとてもいい天気です。短いパンツをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！';
        //selectに入力された値がrainyの場合、
    } else if (choice === 'rainy') {
        // paraには「'雨が降っています。〜」が反映される
        para.textContent = '雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。';
        //selectに入力された値がsnowingの場合、
    } else if (choice === 'snowing') {
        // paraには「'雪が降ってとても寒いです！〜」が反映される
        para.textContent = '雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。';
        //selectに入力された値がovercastの場合、
    } else if (choice === 'overcast') {
        // paraには「'雨は降っていませんが〜」が反映される
        para.textContent = '雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持ちましょう。';
    } else {
        // 上記に該当しない場合''（空）が返される
        para.textContent = '';
    }
}
