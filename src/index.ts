// chap05フォルダのProduct.jsから、Productクラスを読み込む
import { Product } from './chap05/Product.js';
// prompt-syncをインポートする
import promptSync from 'prompt-sync';
// ユーザー入力を受け取るための準備(sigint: trueはCtrl+C で終了できるようにする設定）
const prompt = promptSync({ sigint: true });

// キー入力された値を取得する
let id: string = prompt("商品Idを入力してください->");
// キー入力された値を取得する
let name: string = prompt("商品名を入力してください->");
// キー入力された値を取得する
let price: string = prompt("単価を入力してください->");

// 商品を表すクラスのインスタンスを生成する
const product = new Product(id, name , parseInt(price));
// print()メソッドを実行する
product.print();