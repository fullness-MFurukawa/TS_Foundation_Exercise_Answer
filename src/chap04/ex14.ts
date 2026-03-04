/**
 * 演習-14 関数を作成して利用する
 */

/**
 * 指定された率の値引きをした単価を計算して返す
 * @param price 単価
 * @param discountRate 値引き率 
 * @returns 値引き後単価
 */
export function calcPrice(price: number, discountRate: number): number {
  return price * (1 - discountRate);
}