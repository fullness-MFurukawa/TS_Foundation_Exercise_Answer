import promptSync from 'prompt-sync';
import { searchStation } from './searchStation.js';

const prompt = promptSync({ sigint: true });
/**
 * 演習-29 非同期処理機能を利用する
 */
export async function ex29_func(): Promise<void> {

    const search1 = prompt("駅名-1を入力してください->");
    const search2 = prompt("駅名-2を入力してください->");
    const search3 = prompt("駅名-3を入力してください->");

    // 複数の非同期処理を同時に開始し、Promiseオブジェクトを配列に格納する
    const promises = [
        searchStation(search1),
        searchStation(search2),
        searchStation(search3),
    ];

    // Promise.allSettled()ですべての完了を待機する
    const results = await Promise.allSettled(promises);
    // 実行結果を出力する
    for (const result of results) {
        if (result.status === "fulfilled") {
            console.log("【成功】", result.value);
        } else {
            console.error("【失敗】", result.reason);
        }
    }
    console.log("--- 処理を終了します ---");
}