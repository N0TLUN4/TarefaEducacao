"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js?v=1669332102").then(function(e){e.onupdatefound=function(){var r=e.installing;r.onstatechange=function(){switch(r.state){case"installed":var e;navigator.serviceWorker.controller&&(e=new Event("sw.update"),window.dispatchEvent(e))}}}}).catch(function(e){console.error("Error during service worker registration:",e)});
