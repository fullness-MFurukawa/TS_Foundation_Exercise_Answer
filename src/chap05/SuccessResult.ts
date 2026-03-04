import type { ApiResponse } from "./ApiResponse.js";

/**
 * Union型を利用する
 * レスポンス取得成功を表すクラス
 */
export class SuccessResult implements ApiResponse {

    // レスポンスデータを表すプロパティ
    private _data: string;
    /**
     * コンストラクタ
     * @param data レスポンスデータ
     */
    constructor(private data: string) {
        this._data = data;
    }
    /**
     * 取得成功メッセージを表示する
     */
    public display(): void {
        console.log(`取得成功：${this._data}`);
    }
}