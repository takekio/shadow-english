# Shadow English 0.2

## 更新方法
ZIPの中身（index.html, app.js, lessons.js, tts-worker.js, sw.js, manifest.json, icons, README.md）を既存リポジトリのルートへ上書きアップロードし Commit changes。Pages設定はそのまま。公開後にページを再読み込み。旧版が残る場合はブラウザを閉じて再度開くかサイトキャッシュを更新。学習記録は旧版と同じ localStorage キーを利用するのでサイトデータを削除しないこと。

## AI教材（14本）
教材選択 → 声を選択 → AI音声を準備 → 再生。Kokoro 82M (Apache-2.0) の量子化モデルをブラウザでロードし、各文を WAV に変換。初回のモデル取得は通信とメモリを必要とする。通信費は利用者負担。音声合成にAPIキー不要。生成音声はページ内で再利用するが、ページを閉じると破棄される。端末標準音声には自動で戻らない。CDNとモデル配布元にアクセスする。AI音声品質、モデル取得、端末動作は実機未確認。
- https://github.com/hexgrad/kokoro/blob/main/kokoro.js/README.md
- https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX

## 人間音声（2本）
VOA Learning Englishの公式MP3へのリンクを利用。冒頭の原文のみ表示。全文は出典ページのConversationから取得し、一文ずつ改行して貼り付ける。文頭時刻を手動記録すると、その時刻で同期・リピート可能。未設定時は全文再生と全体リピート。外部MP3が再生できない場合は公式ページからダウンロードし、音声ファイルを読み込む。外部MP3の再生は未検証。人間音声の正確な時刻データは未収録。
- https://learningenglish.voanews.com/a/lets-learn-english-lesson-one/3111026.html
- https://learningenglish.voanews.com/a/lets-learn-english-lesson-2-hello/3113733.html
- https://learningenglish.voanews.com/p/6861.html

## 確認項目
AI音声準備と再生、文送り、英文表示切替、速度、反復、VOA再生、録音、日付切替、旧学習記録の保持。録音は端末内の一時データ。PWAはアプリ本体をキャッシュするが外部音源とAIモデルの完全オフライン動作は保証しない。日替わり教材は16日周期。
