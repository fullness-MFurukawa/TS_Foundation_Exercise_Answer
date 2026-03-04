import { ValidationError } from "./ValidationError.js";

/**
 * ユーザー権限のUnion型S
 */
export type UserRole = "admin" | "member" | "guest";
/**
 * 5-7.例外処理
 * ユーザを表すクラス
 */
export class User {
    private readonly _id: string;        // ユーザーID(一意)
    private _lastName: string = "";      // 姓
    private _firstName: string = "";     // 名
    private _email: string = "";         // メールアドレス
    private _age: number = 0;            // 年齢
    private _role: UserRole;             // 権限

    /**
     * コンストラクタ
     * @param id ユーザーID
     * @param lastName  姓 
     * @param firstName 名
     * @param email メールアドレス
     * @param age 年齢
     * @param role 権限
     */
    constructor(id: string, lastName: string, firstName: string, 
        email: string, age: number, role: UserRole) {
        // ユーザーIdの変更
        if (!id) throw new ValidationError("IDは必須です。");
        this._id = id;
        this.updateProfile(lastName, firstName);
        this.updateEmail(email);
        this.validateAge(age);    
        this._role = role;
    }

    /**
     * 姓名の変更
     * @param lastName 
     * @param firstName 
     */
    private updateProfile(lastName: string, firstName: string): void {
        if (!lastName || !firstName) {
            throw new ValidationError("姓名はどちらも空にできません。");
        }
        this._lastName = lastName;
        this._firstName = firstName;
    } 

    /**
     * メールアドレスの変更
     * @param email メールアドレス
     */
    private updateEmail(email: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new ValidationError(`無効なメール形式です: ${email}`);
        }
        this._email = email;
    }

    /**
     * 年齢の変更
     * @param age　年齢 
     */
    private validateAge(age: number): void {
        if (age < 18 || age > 120) {
            throw new ValidationError("18歳未満または120歳以上は登録できません。");
        }
        this._age = age;
    }

    /**
     * フルネームを返すメソッド
     */
    public get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    /**
     * オブジェクトの文字列表現を返す
     * @returns ユーザー情報のサマリー文字列
     */
    public toString(): string {
        return `[ID:${this._id}] ${this.fullName} (${this._role}) - ${this._email}`;
    }
}