/*
 * 演習-08 if-else文の機能を確認する
 */

// prompt-syncをインポートする
import promptSync from 'prompt-sync';
// ユーザー入力を受け取るための準備
const prompt = promptSync({ sigint: true });

export function ex08_func(): void {
    // キー入力された値を取得する
    const input = prompt("金額を入力してください->");
    // 文字列を数値に変換する
    const price = parseInt(input);

    // 会員ではない
    const isMember: boolean = false;
    // 会員または5000円以上の購入で送料無料
    if (isMember || price >= 5000) {
        console.log("送料無料です。");
    } else {
        console.log("送料がかかります。");
    }
}