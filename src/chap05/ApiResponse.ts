/**
 * Union型を利用する
 * APIレスポンスを表すインターフェイス
 */
export interface ApiResponse {
    // 結果を表示するメソッド
    display(): void;
}