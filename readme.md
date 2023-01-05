### build sign file
```
keytool -genkey -v -keystore my-keystore.keystore -alias name_alias -keyalg RSA -validity 10000
```

### install sdk tool
```
sudo apt install zipalign
sudo apt install apksigner
```

### build
```
yarn build
```