/*
 * 演習-13 for文、while文、break文の機能を確認する
 */

// prompt-syncをインポートする
import promptSync from 'prompt-sync';
// ユーザー入力を受け取るための準備
const prompt = promptSync({ sigint: true });

export function ex13_func(): void {

    const stations: string[] 
        = ["品川", "大崎", "五反田", "目黒", "恵比寿", "渋谷", "原宿", "新宿"];

    // 無限ループ
    while(true){
        // キー入力された値を取得する
        const station = prompt("駅名を入力してください->");
        if (station === "end"){
            break;
        }
        let message: string = `${station}は、存在しません。`;
        for (let i = 0; i < stations.length; i++) {
            if (station === stations[i]){
                message = `${station}は、${i+1}番目の駅です。`;
                break;
            }
        }
        console.log(message);
    }
}