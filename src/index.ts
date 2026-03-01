// chap05フォルダのManager.jsから、Managerクラスを読み込む
import { Manager } from './chap05/Manager.js';
// prompt-syncをインポートする
import promptSync from 'prompt-sync';
// ユーザー入力を受け取るための準備(sigint: trueはCtrl+C で終了できるようにする設定）
const prompt = promptSync({ sigint: true });

// キー入力された値を取得する
const id = prompt("従業員Idを入力してください->");
// キー入力された値を取得する
const name = prompt("従業員名を入力してください->");
// キー入力された値を取得する
const basicSalary = parseInt(prompt("基本給を入力してください->"));
// キー入力された値を取得する
const managerAllowance = parseInt(prompt("役職手当を入力してください->"));

// 従業員クラスのインスタンスを生成する
const manager = new Manager(id, name, basicSalary, managerAllowance);
// 業務を行うメソッドを実行する
manager.work();
//  給与を計算するメソッド
const salary = manager.calculateSalary();
// 給与を通貨形式に変換する
const amount = new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY'
}).format(salary);
console.log(`${manager.name}さんの基本給は${amount}です。`);