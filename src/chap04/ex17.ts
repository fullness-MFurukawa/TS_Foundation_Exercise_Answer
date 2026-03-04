/**
 * 演習-17 アロー関数を利用する 
 */

export const discountPrice = (price: number, discountRate: number): number => {
    return price * (1 - discountRate);
}