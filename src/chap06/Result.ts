/**
 * 演習-25 Genericsを利用する
 * 汎用的なデータ保持クラス
 */
export class Result<T> {
    /**
     * コンストラクタでの省略記法を利用
     * @param success 成功/失敗
     * @param data データ
     */ 
    constructor(
        public readonly success: boolean, 
        public readonly data: T
    ) {}
}