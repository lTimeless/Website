<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span>&middot;</span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>

        <div
          class="text-lg mb-4"
          v-if="post.node.content.length < 200"
          v-html="post.node.content "
        ></div>
        <div
          class="text-lg mb-4"
          v-if="post.node.content.length >= 200"
          v-html="post.node.content.substring(0,300) "
        ></div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div>

      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>


<page-query>
query Post {
  posts: allPost (sortBy:"date", order: DESC, filter: {fileInfo: {directory: {regex: "blog/blog"}}}) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        content
        date (format: "MMMM D, Y")
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
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    PaginationPosts
  }
};
</script>



