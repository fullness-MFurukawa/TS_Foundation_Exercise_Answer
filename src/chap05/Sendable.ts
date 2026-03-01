/**
 * 5-5. インターフェイス
 * 通知を表すインターフェイス
 */
export interface Sendable{
    /**
     * メッセージを通知するメソッド
     * @param message メッセージ
     */
    send(message: string): void;
}