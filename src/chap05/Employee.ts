/**
 * 5-4. クラスの継承
 * 従業員を表すクラス
 */
export class Employee {
    // 社員Idを表すプロパティ
    private _id: string;
    // 社員名を表すプロパティ
    private _name: string;
    // 基本給を表すプロパティ
    protected _baseSalary: number;

    /**
     * コンストラクタ
     * @param id 社員番号
     * @param name 氏名
     * @param baseSalary 基本給
     */
    constructor(id: string, name: string, baseSalary: number) {
        this._id = id;
        this._name = name;
        this._baseSalary = baseSalary;
    }

    // 名前は読み取り専用で公開
    get name(): string {
        return this._name;
    }

    // 社員番号も読み取り専用で公開
    get id(): string {
        return this._id;
    }

    /**
     * 業務を行うメソッド
     */
    public work(): void {
        console.log(`${this._name} (ID: ${this._id}) は業務中です。`);
    }

    /**
     * 給与を計算するメソッド
     * 親クラスでは「基本給をそのまま返す」標準的な動きを定義
     */
    public calculateSalary(): number {
        return this._baseSalary;
    }
}