<template>
  <v-app class="ma-10">
    <v-row>
      <v-col
        v-for="(item, i) in iframArray"
        :key="i"
        cols="12"
        xs="12"
        sm="6"
        lg="3"
      >
        <h3 justify="center">{{ item.title }}</h3>
        <iframe
          width="300"
          height="200"
          class="bounce-in-top mt-10"
          :src="item.srcVideo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      iframArray: [
        {
          title: "ترشيد الاطفال في استهلاك المياه",
          srcVideo: "https://www.youtube.com/embed/MLgpjaS6TX4",
        },
        {
          title: "نوره والماء",
          srcVideo: "https://www.youtube.com/embed/_xmmPrvbc9I",
        },
        {
          title: "نصائح للحفاظ علي الماء",
          srcVideo: "https://www.youtube.com/embed/gZsstDIp24o",
        },
        {
          title: "المحافظه علي الماء",
          srcVideo: "https://www.youtube.com/embed/1G28AbR6pA8",
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>