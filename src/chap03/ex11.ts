/*
 * 演習-11 for...of文の機能を確認する
 */

export function ex11_func(): void {

    const names: string[] 
        = ["山田 太郎", "鈴木 花子", "田中 次郎", "佐藤 なな"];

    for (const name of names){
        console.log(`氏名: ${name}`);
    }
}