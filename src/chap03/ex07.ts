/*
 * 演習-07 if文の機能を確認する
 */

// prompt-syncをインポートする
import promptSync from 'prompt-sync';
// ユーザー入力を受け取るための準備
const prompt = promptSync({ sigint: true });

export function ex07_func(): void {
    // キー入力された値を取得する
    const input = prompt("値を入力してください->");
    // 文字列を数値に変換する
    const value = parseInt(input);
    
    let meesage: string = "入力された値は奇数です。";
    if (value % 2 == 0){
        meesage = "入力された値は偶数です。"
    }
    console.log(meesage);
}