import blog, { ga, redirects } from "https://deno.land/x/blog/blog.tsx";
import { unocss_opts } from "./unocss.ts";

blog({
  author: "诺影 NotJunar",
  title: "诺影博客 | NotJunar Blog",
  description: "12 岁寒，然后知松柏之后凋也。——《论语·子罕》",
  avatar: "avatar.png",
  avatarClass: "rounded-full",
  links: [
    { title: "Discord", url: "dsc.gg/jnmc" },
    { title: "GitHub", url: "https://github.com/HackerYijia" },
    { title: "Twitter", url: "https://twitter.com/NotJunar" },
  ],
  lang: "en",
  // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  middlewares: [
    ga("UA-XXXXXXXX-X"),
    redirects({
      "/foo": "/my_post",
      // you can skip leading slashes too
      "bar": "my_post2",
    }),
  ],
  unocss: unocss_opts, // check https://github.com/unocss/unocss
  favicon: "favicon.ico",
});
