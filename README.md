# magento2-mix
Webpack Mix for Magento 2

Simply put this file along with the package.json in the root of you Magento

## Project setup
```
yarn
```
## make the neccessary changes here for your theme and module names, languages and namespaces
```
let modules = [
	{folder:'Adam/AnotherExtension', namespace:'Adam_AnotherExtension', lang:'en_GB', themefolder:'Adam/Luma_Child'},
	{folder:'Adam/AnotherExtension', namespace:'Adam_AnotherExtension', lang:'en_GB', themefolder:'Adam/Another'},
];
let themes = [
	{folder:'Adam/Another', lang:'en_GB'}, 
	{folder:'Adam/Luma_Child',lang:'en_GB'}];
```

### Compiles and hot-reloads for development
```
yarn watch
```
### Easy magento commands

Deploy mode set Developer
```
yarn developer
```
Deploy mode set Production
```
yarn production
```
Clean Magento Cache
```
yarn clean
```
Flush Magento Cache
```
yarn flush
```
Deploy Magento Static Content
```
yarn deploy
```

### Watch the full tutorial here
See https://youtu.be/Zew4dZISB5g
