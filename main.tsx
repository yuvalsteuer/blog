/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Yuval Steuer",
  description: "took the red pill, or was it the blue pill? not good with colors",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "Yuval Steuer",
  links: [
    { title: "Email", url: "mailto:me@yuvalsteuer.com" },
    { title: "GitHub", url: "https://github.com/yuvalsteuer" },
    { title: "Twitter", url: "https://twitter.com/yuvalsteuer" },
  ],
  lang: "en",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
