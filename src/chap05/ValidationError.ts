/**
 * 5-7.例外処理
 * バリデーションエラーを表すクラス
 */
export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}