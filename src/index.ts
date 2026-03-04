import { Article } from "./chap06/Article.js";
import { MediaManager } from "./chap06/MediaManager.js";
import { Video } from "./chap06/Video.js";

const video = new Video("TypeScript入門", 45);
const article = new Article("ジェネリクスの極意", "山田 太郎");

// 型推論によりPrintableインターフェイス実装を利用する
const manager = new MediaManager(); 
manager.add(video);
manager.add(article);
manager.showAll();