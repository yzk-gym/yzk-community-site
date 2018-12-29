<template>
  <content-title title="Welcome to YZKAMP!" id="c-description-title"></content-title>
</template>
<script>
import "normalize.css";
import Logo from "./components/Logo";
import NextEvent from "./components/NextEvent";
import Footer from "./components/layouts/Footer";
import ContentTitle from "./components/ContentTitle";
import ReadMore from "./components/ReadMore";
import Description from "./components/Description";
import Button from "./components/Button";

export default {
  components: {
    Button,
    Description,
    ReadMore,
    ContentTitle,
    Footer,
    NextEvent,
    Logo
  }
};
</script>
<style>
#top {
  width: 100vw;
  background-color: #009acc;
}
.p-description {
  text-align: center;
}
#c-description-logo {
  margin: 0.5em;
  width: 4em;
}
#c-description-title {
  margin: 0 2em;
  font-size: 22px;
}
#c-description-readmore {
  margin: 0;
  color: white;
}
#p-schedule {
  background-color: #0085b3;
}
#c-schedule-title {
  font-size: 34px;
}
#c-schedule-description {
  margin: 1em 0 0 40%;
  background-color: white;
}
#c-schedule-button {
  margin: 0em;
  padding: 1em;
}
#p-calendar iframe {
  margin: 0 10%;
  max-width: 80%;
  max-height: 300px;
}
@media all and (min-width: 768px) {
  .googleCalendar iframe {
    height: 600px;
  }
}
</style>
