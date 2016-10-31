import './polyfills.ts';

// 应用程序主入口
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// ng2 中的部分全局 pipes 使用了 ES2015 标准定义实现, 目前只有 chrome 和 opera原生支持, 对于不支持的浏览器 需要引入 Intl
// 参见: https://github.com/angular/angular/blob/master/modules/@angular/common/src/pipes/number_pipe.ts#L99

if (!window.Intl) {
    require.ensure(['intl', 'intl/locale-data/jsonp/en.js'], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/en.js');
    }, 'intl')
}
runMyApp();

function runMyApp() {
    enableProdMode();
    platformBrowserDynamic().bootstrapModule(AppModule);
}

