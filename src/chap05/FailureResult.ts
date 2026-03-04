/**
 * Union型を利用する
 * レスポンス取得失敗を表すクラス
 */

import type { ApiResponse } from "./ApiResponse.js";

export class FailureResult implements ApiResponse {
    // エラーメッセージを表すプロパティ
    private _message: string;
    
    /**
     * コンストラクタ
     * @param message 
     */
    constructor(private message: string) {
        this._message = message;
    }

    /**
     * エラーメッセージを表示する
     */
    public display(): void {
        console.log(`エラー発生：${this._message}`);
    }
}