<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight" id="type"></div>
        <!-- <div class="text-green-700 leading-tight">Powered by Vue.js &amp; Tailwind 1.0</div> -->
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../assets/images/developer.svg" alt="hero" class="mx-auto sm:mx-0"/>
      </div>
    </div>
    <!-- end hero -->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        This gridsome theme was forked from my
        <a href="https://andremadarang.com">personal website</a>. I added more features and decided to release it as an open source project. Check it out on
        <a
          href="https://github.com/drehimself/gridsome-portfolio-starter"
        >GitHub</a> or check out the
        <a href="https://www.youtube.com/watch?v=uHo6o1TNQeE">screencast I did</a>. Feel free to use it for your own site or projects! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, repellat. Dolores iure, quas perspiciatis rerum quaerat atque eum repellat autem.
      </p>

      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../assets/images/mind_map.svg" alt="browser"/>
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../assets/images/code_review.svg" alt="mobile"/>
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div
        class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative"
      >
        <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle"></use>
          </svg>
        </div>

        <ul class="text-lg sm:text-xl">
          <li class="checkmark mb-6" v-for="post in $page.posts.edges" :key="post.id">
            <g-link :to="post.node.path">
              <div>{{post.node.title}}</div>
              <div class="text-lg text-gray-600" v-html="post.node.content.substring(0,100)"></div>
            </g-link>
          </li>
        </ul>
      </div>
      <!-- end projects -->
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle"></use>
          </svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div>
            <g-image
              src="../assets/images/avatar.jpg"
              alt="avatar"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div
            class="flex-1 text-lg sm:text-xl ml-6"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
        </div>
      </div>
      <!-- end get-to-know me -->
    </div>
  </Layout>
</template>


<page-query>
query Post {
  posts: allPost(
    sortBy: "date"
    order: ASC
    limit: 4
    filter: { fileInfo: { directory: { regex: "blog/projects" } } }
  ) {
    edges {
      node {
        id
        title
        content
        date
        path
        featuredImage
        timeToRead
        fileInfo {
          directory
        }
      }
    }
  }
}
</page-query>

<script>
import * as Sentry from "@sentry/browser";

export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      title: " Hello I'm Maximilian Stümpfl",
      speed: 90,
      wordCounter: 0
    };
  },
  mounted() {
    // Splitting();
    console.log("home mounted");
    Sentry.captureMessage("Home mounted test.. New Design");
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      if (this.wordCounter < this.title.length) {
        document.getElementById("type").innerHTML += this.title.charAt(
          this.wordCounter
        );
        this.wordCounter++;
        setTimeout(this.typeWriter, this.speed);
      }
    }
  }
};
</script>

<style>
</style>
