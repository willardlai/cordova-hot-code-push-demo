# Cordova Hot Code Push Demo
Cordova熱更新測試
---

```
$ npm install -g cordova-hot-code-push-cli
```

修改 chcp.json 裡的 content_url 與 config.xml 裡面的 chcp 中的 config_file url，

將路徑 http://172.20.10.6:8888/hot-code-update/ 修改為你自己的靜態網站路徑


```sh
$ cordova-hcp build
```

將 www/ 檔案複製到你的靜態伺服器上

```sh
$ cordova platform add android
```

```sh
$ cordova run android
```

嘗試更新index.html檔案

再次執行

```sh
$ cordova-hcp build
```

再將 www/ 檔案複製到你的靜態伺服器上

重新啟動APP，若有更新就表示成功。