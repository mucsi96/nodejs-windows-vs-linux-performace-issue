This example project demonstrates that module loading performance is 3.44x time better on Linux compared to Windows platform on same machine.

CPU profiles and time measurements made on the following specs using `npm run debug` command:
- NodeJs version: 12.7.0
- OS type: 64-bit
- Processor: Intel® Core™ i7-4702MQ CPU @ 2.20GHz × 8 
- Memory: 8GB
- Drive: 256.1GB SSD

### Windows 10 Pro

```
PS C:\Users\mucsi\repos\nodejs-windows-vs-linux-performace-issue> npm start

> nodejs-windows-vs-linux-performace-issue@1.0.0 start C:\Users\mucsi\repos\nodejs-windows-vs-linux-performace-issue
> node index.js

Hello world
Total time: 1362.697099
```

### Ubuntu 19.04

```
igor@igor:~/nodejs-windows-vs-linux-performace-issue$ npm start

> nodejs-windows-vs-linux-performace-issue@1.0.0 start /home/igor/nodejs-windows-vs-linux-performace-issue
> node index.js

Hello world
Total time: 395.882499
```
