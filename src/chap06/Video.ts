import type { Printable } from "./Printable.js";
/**
 * 演習-26 制約(extends)付きのジェネリクスを利用する
 * Videoを表すクラス
 */
export class Video implements Printable {
    /**
     * コンストラクタ
     * @param title タイトル
     * @param duration 再生時間
     */
    constructor(private title: string, private duration: number) {}

    /**
     * タイトルと再生時間を表示する
     */
    printName(): void {
        console.log(`🎥 Video: ${this.title} (${this.duration}分)`);
    }
}