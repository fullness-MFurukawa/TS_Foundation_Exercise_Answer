/*
 * 演習-10 switch～case文の機能を確認する-②
 */

// prompt-syncをインポートする
import promptSync from 'prompt-sync';
// ユーザー入力を受け取るための準備
const prompt = promptSync({ sigint: true });

export function ex10_func(): void {
    // キー入力された値を取得する
    const input = prompt("値を入力してください->");
    // 文字列を数値に変換する
    const value = parseInt(input);
    let message: string = "";
    switch(true){
        case (value > 0):
            message = "正の値です。";
            break;
        case (value === 0):
            message = "ゼロです。"
            break;
        case (value < 0):
            message = "負の値です。";
            break;
    }
    console.log(message);
}