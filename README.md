# Shadow English
7教材を日付で循環する無料PWA試作。英語音声は端末のWeb Speech APIを利用し、音質やオフライン再生は端末依存。録音はHTTPS・マイク許可が必要。録音データはページ内のみ。学習時間は音声再生セッションの時間（文間を含む）。学習履歴は端末内保存。外部APIなし。

## 公開
GitHubで新規リポジトリを作成し、このフォルダ内のファイルをルートにアップロード。Settings > Pages > Deploy from a branch > main / root を選択。公開URLをスマートフォンで開き、ホーム画面に追加。ローカルでは python3 -m http.server 8000 で起動可能。
