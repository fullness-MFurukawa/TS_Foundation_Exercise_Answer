/**
 * 演習-18 クラスを作成して利用する
 */

/**
 * 商品を表すクラス
 */
export class Product{
    // 商品Idプロパティ
    id: string;
    // 商品名プロパティ
    name: string;
    // 単価プロパティ
    price: number;

    /**
     * コンストラクタ
     * @param id 商品Id
     * @param name 商品名
     * @param price 単価
     */
    constructor(id: string, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    /**
     * 商品の詳細を表示するメソッド
     */
    print(): void{
        console.log(`商品Id:${this.id}`);
        console.log(`商品名:${this.name}`);
        console.log(`単価:${this.price}`);
    }
}