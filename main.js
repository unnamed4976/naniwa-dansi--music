'use strict';

{

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  const results = ['Overture', '初心LOVE', 'Dreamin` Dreamin`', 'サチアレ', '月火水木君曜日', '妄想っちゅーDiscooooooo!!', 'Brand New Heroine', 'ちゅきちゅきハリケーン', 'ちゅきちゅきハリケーン', 'シンシア', 'Timeless Love', 'The Answer', 'Emerald', 'ダイヤモンドスマイル', '', ];
  

  const n = Math.floor(Math.random() * results.length);

  result.textContent = results[n];

  // switch(n) {
  //   case 0:
  //     result.textContent = '大吉';
  //     break;
  //   case 1:
  //     result.textContent = '中吉';
  //     break;
  //   case 2:
  //     result.textContent = '凶';
  //     break;
  // }

});

}
