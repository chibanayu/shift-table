function buttonClick() {
  //配列を用意する
  let member1 = ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "相澤", "中村", "高橋", "渡辺", "山本", "吉田", "石田"];
  // let member2 = ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "相澤", "中村", "高橋", "渡辺", "山本", "吉田", "石田"];
  //member1からランダムで6人ずつ出しを変数に格納
  let newMember1 = random(member1, 6);
  let newMember2 = random(member1, 6);
  //member1から残りの3人を出す
  let newMember3a = random(member1, 3);
  //member2(15人)とnewMember3a(3人)を比較して差分を出す
  newMember6 = member2.filter(i => newMember3a.indexOf(i) == -1)
  let newMember3b = random(newMember6, 3);
  //member2(15人)とnewMember3b(3人)を比較して差分を出す
  newMember7 = member2.filter(i => newMember3b.indexOf(i) == -1)
  //差分からランダムで6人ずつ出し変数に格納
  let newMember4 = random(newMember7, 6);
  let newMember5 = random(newMember7, 6);

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
