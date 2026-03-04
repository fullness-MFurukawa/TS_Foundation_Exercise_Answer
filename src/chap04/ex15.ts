/**
 * 演習-15 オプション引数を持つ関数を作成して利用する 
 */

/**
 * 指定された率の値引きをした単価を計算して返す
 * @param price 単価
 * @param discountRate 値引き率(オプション引数) 
 * @returns 値引き後単価
 */
export function calcPrice(price: number, discountRate?: number): number {
    if (discountRate === undefined) {
        return price;
    }
    return price * (1 - discountRate);
}