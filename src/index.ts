import { EmailService } from "./chap05/EmailService.js";
import type { Sendable } from "./chap05/Sendable.js";
import { SmsService } from "./chap05/SmsService.js";

/**
 * 通知を実行する共通関数
 * 引数の型を「Sendable」にすることで、メールかSMSかを気にせず「送る」ことができる
 */
function notify(target: Sendable, msg: string): void {
    console.log("--- システム通知を開始します ---");
    target.send(msg); // ここがインターフェース（多態性）の真骨頂！
}

const myEmail = new EmailService("tanaka@example.com");
const mySms = new SmsService("090-1234-5678");

// メールで通知
notify(myEmail, "サーバーが再起動されました。");
myEmail.showLog(); // EmailServiceはログ機能も持っている

console.log("--------------------------------");

// SMSで通知
notify(mySms, "緊急：ログイン試行を検知しました。");
