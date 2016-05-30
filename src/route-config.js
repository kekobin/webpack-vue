import FastClick from 'fastclick';

export function configRouter (router) {
  router.map({
      "/": {
          component: require("./views/home.vue")
      },
      "/getScore": {
          component: require("./views/getScore.vue")
      },
      "/guess/:guessId": {
          component: require("./views/guess.vue")
      },
      "/rewardResult": {
          component: require("./views/rewardResult.vue")
      }
  });

  // redirect
  // router.redirect({
  //   '/': '/'
  // });

  router.beforeEach(transition => {
      FastClick.attach(document.body);
      transition.next();
  });
}
