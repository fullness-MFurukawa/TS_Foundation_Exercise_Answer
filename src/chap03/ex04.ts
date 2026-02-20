/*
 * 演習-04 入力して文字列をnumber型に変換する
 */

// prompt-syncをインポートする
import promptSync from 'prompt-sync';
// ユーザー入力を受け取るための準備(sigint: trueはCtrl+C で終了できるようにする設定）
const prompt = promptSync({ sigint: true });

export function ex04_func(): void {
    // キー入力された値を取得する
    const value = prompt("値を入力してください->");
    // 文字列を変換した結果を表示する
    console.log(`parseInt()関数を利用: ${parseInt(value)}`);
    console.log(`Number()関数を利用: ${Number(value)}`);
    console.log(`parseFloat()関数を利用: ${parseFloat(value)}`);
}