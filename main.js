function buttonClick() {
  //配列を用意する
  let member1 = ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "相澤", "中村", "高橋", "渡辺", "山本", "吉田", "石田"];
  let member2 = ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "相澤", "中村", "高橋", "渡辺", "山本", "吉田", "石田"];
  //ランダムで取得した名前を変数に格納する
  let newMember1 = random(member1, 6);
  let newMember2 = random(member1, 6);
  //member1から残りの3人を出す
  let newMember3a = random(member1, 3);
  //member2から3人出す
  let newMember3b = random(member2, 3);
  let newMember4 = random(member2, 6);
  let newMember5 = random(member2, 6);
  //ブランチに表示させる
  let td = document.getElementById("list");
  td.insertAdjacentHTML(
    "beforeend",
    `<tr class="member"><td>${newMember1}</td><td>${newMember2}</td><td>${newMember3a},${newMember3b}</td><td>${newMember4}</td><td>${newMember5}</td></tr>`
  );

  function random(arrayData, count) {
    // countが設定されていない場合は1にする
    var count = count || 1;
    var arrayData = arrayData;
    //新しい配列を用意
    let randomMember = [];
    for (var i = 0; i < count; i++) {
      var arrayIndex = Math.floor(Math.random() * arrayData.length);
      randomMember[i] = arrayData[arrayIndex];
      // 1回選択された値は削除して再度選ばれないようにする
      arrayData.splice(arrayIndex, 1);
    }
    //配列に戻す
    return randomMember;
  }
}
