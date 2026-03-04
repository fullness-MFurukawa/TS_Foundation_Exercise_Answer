import type { Printable } from "./Printable.js";

/**
 * 演習-26 制約(extends)付きのジェネリクスを利用する
 * ジェネリクスに制約を課した管理クラス
 * T は必ずPrintableの構造で、printName()メソッドを持っている必要がある
 */
export class MediaManager<T extends Printable> {
    // Printableインターフェイス実装を管理する配列
    private items: T[] = [];
    /**
     * Printableインターフェイス実装を追加する
     * @param item 
     */
    add(item: T): void {
        this.items.push(item);
    }
    /**
     * PrintableインターフェイスのprintName()メソッドを実行する
     */
    showAll(): void {
        console.log("--- メディア一覧を表示します ---");
        // T が Printable であることが保証されているため、安全にメソッドを呼べる
        this.items.forEach(item => item.printName());
    }
}