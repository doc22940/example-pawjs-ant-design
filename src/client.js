import 'antd/dist/antd.less';
import './resources/css/styles.less';

export default class Client {
  apply(clientHandler) {
    clientHandler.hooks.beforeRender.tapPromise('InitAds', async () => {
      // eslint-disable-next-line
      if (typeof _codefund !== 'undefined' && _codefund.serve) {
        // eslint-disable-next-line
        _codefund.serve();
      }
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    });
    clientHandler.hooks.locationChange.tapPromise('ReInitAds', async () => {
      // eslint-disable-next-line
      if (typeof _codefund !== 'undefined' && _codefund.serve) {
        // eslint-disable-next-line
        _codefund.serve();
      }
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    });
  }
}
