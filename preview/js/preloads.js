
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.ec167738758c3238af6a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5042.latest.pt-BR.7716928e6909f84ccd90.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9809.latest.pt-BR.b8a0813fc2b5e3ae5ac6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5742.latest.pt-BR.229645047f1cf5d25935.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.6d714567d4646f717276.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6400.latest.pt-BR.045b37774dd65efc2902.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3645.latest.pt-BR.7970ecd7174524193565.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9222.latest.pt-BR.21e0ff8119792b086841.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9478.latest.pt-BR.9be6cc77d5aa58688ebc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3940.latest.pt-BR.5127cdeb22e3f8107970.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6363.latest.pt-BR.7dbcf8065319b817d96c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3930.latest.pt-BR.d1a24275736e6f7f858f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2838.latest.pt-BR.b1a4eb15fbf61a0ef8d2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.2e6aa5f59951d6568280.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5042.latest.pt-BR.39e037bce4997f545a3a.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.5da3f52c706a09a6da39.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.24776bc55f29002e680f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  