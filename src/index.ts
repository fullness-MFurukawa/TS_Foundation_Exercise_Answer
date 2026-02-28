// chap05フォルダのProduct.jsから、Productクラスを読み込む
import { Product } from './chap05/Product.js';
// prompt-syncをインポートする
import promptSync from 'prompt-sync';
// ユーザー入力を受け取るための準備(sigint: trueはCtrl+C で終了できるようにする設定）
const prompt = promptSync({ sigint: true });


// 商品を表すクラスのインスタンスを生成する
let product: Product = new Product("0", "商品名無し" , 0);

// キー入力された値を取得する
product.id = prompt("商品Idを入力してください->");
// キー入力された値を取得する
product.name = prompt("商品名を入力してください->");
// キー入力された値を取得する
let price: string = prompt("単価を入力してください->");
product.price= parseInt(price);

// print()メソッドを実行する
product.print();