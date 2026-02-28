/**
 * 演習-18 クラスを作成して利用する
 * 演習-19 GetterとSetterを利用する
 */

/**
 * 商品を表すクラス
 */
export class Product{
    // 商品Idプロパティ
    private _id: string;
    // 商品名プロパティ
    private _name: string;
    // 単価プロパティ
    private _price: number;

    /**
     * コンストラクタ
     * @param id 商品Id
     * @param name 商品名
     * @param price 単価
     */
    constructor(id: string, name: string, price: number){
        this._id = id;
        this._name = name;
        this._price = price;
    }

    /**
     * Getter
     */
    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get price(): number {
        return this._price;
    }
    /**
     * Setter
     */
    set id (value: string){
        if (value.length === 0) {
            console.error("商品Idを設定してください。");
            return;
        }
        this._id = value;    
    }
    set name(value: string) {
        if (value.length === 0) {
            console.error("商品名を設定してください。");
            return;
        }
        this._name = value;
    }
    set price(value: number) {
        if (value < 0) {
            console.error("単価に負の値を設定することはできません。");
        } else {
            this._price = value;
        }
    }

    /**
     * 商品の詳細を表示するメソッド
     */
    print(): void{
        console.log(`商品Id:${this._id}`);
        console.log(`商品名:${this._name}`);
        console.log(`単価:${this._price}`);
    }
}