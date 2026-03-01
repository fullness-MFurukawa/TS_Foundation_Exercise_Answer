import type { Sendable } from "./Sendable.js";

/**
 * 5-5. インターフェイス
 * SMS送信サービス
 * 送信(Sendable)機能だけを持つ
 */
export class SmsService implements Sendable {
    constructor(private _phoneNumber: string) {}

    /**
     * メッセージを通知するメソッド
     * @param message メッセージ
     */
    public send(message: string): void {
        console.log(`【SMS送信】番号: ${this._phoneNumber} / 内容: ${message}`);
    }
}