import type { Printable } from "./Printable.js";
/**
 * 演習-26 制約(extends)付きのジェネリクスを利用する
 * 記事を表すクラス
 */
export class Article implements Printable {
    /**
     * コンストラクタ
     * @param title タイトル
     * @param author 著者
     */
    constructor(
        private title: string,  
        private author: string   
    ) {}

    /**
     * タイトルと著者を表示する
     */
    printName(): void {
        console.log(`📝 Article: ${this.title} (著者: ${this.author})`);
    }
}