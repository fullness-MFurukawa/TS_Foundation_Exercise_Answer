import type { Loggable } from "./Loggable.js";
import type { Sendable } from "./Sendable.js";

/**
 * 5-5. インターフェイス
 * メール送信サービス
 * 送信(Sendable)と履歴表示(Loggable)の両方の能力を持つ
 */
export class EmailService implements Sendable, Loggable {
    constructor(private _address: string) {}

    /**
     * メッセージを通知するメソッド
     * @param message メッセージ
     */
    public send(message: string): void {
        console.log(`【Email送信】宛先: ${this._address} / 内容: ${message}`);
    }

    /**
     * ログを出力するメソッド
     */
    public showLog(): void {
        console.log(`>>> メール送信履歴を表示します（宛先: ${this._address}）`);
    }
}