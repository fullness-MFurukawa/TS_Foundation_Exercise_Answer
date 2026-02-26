/*
 * 演習-12 for...in文の機能を確認する
 */

export function ex12_func(): void {
    // 口座を表すオブジェクト
    const account = {
        no: "101011",
        name: "山田太郎",
        balance: 10000
    }

    for (const key in account) {
        console.log(`${key}: ${account[key as keyof typeof account]}`);
    }
}