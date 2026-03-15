/**
 * 演習-28 Pick<T, K>を利用する
 */
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string; // 長い商品説明
    stock: number;       // 在庫数
    createdAt: Date;     // 登録日時
}