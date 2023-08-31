import axios from "axios";

export async function getVideoList(videoName) {
  try {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: videoName,
          part: "snippet",
          key: apiKey,
          maxResults: 10,
          type: "video",
        },
      }
    );

    const videoList = response.data.items.map((video) => {
      return {
        title: video.snippet.title,
        videoId: video.id.videoId,
        thumbnail: video.snippet.thumbnails.default.url,
        channelTitle: video.snippet.channelTitle,
        liveBroadcastContent: video.snippet.liveBroadcastContent === 'live' ? true : false,
      };
    });

    /*  const videoList = [
      {
        thumbnail:
          "https://yt3.ggpht.com/ytc/AOPolaSKQnVS0PWsb1jwg2XOzWrHFGLJjw2sQy7xUY6D=s88-c-k-c0xffffffff-no-rj-mo",
        title: "midulive",
        videoId: "undefined",
      },
      {
        thumbnail:
          "https://yt3.ggpht.com/ytc/AOPolaR9oDiFI1IrhUH9ot4A76ecdxURoQSHL818cHKS4A=s88-c-k-c0xffffffff-no-rj-mo",
        title: "midudev",
        videoId: "undefined",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/UZarokfByTs/default.jpg",
        title:
          "¿Cómo me ORGANIZO? Mi SECRETO para ser más PRODUCTIVO y APRENDER más rápido programación",
        videoId: "UZarokfByTs",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/wTpuKOhGfJE/default.jpg",
        title:
          "🧑‍💻Bootcamp FullStack Gratuito | Javascript, React.js, GraphQL, Node.js, TypeScript y +",
        videoId: "undefined",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/7tEbuCZNVeM/default.jpg",
        title:
          "MiduDev nos cuenta su &quot;incidente&quot; con la Kings League",
        videoId: "7tEbuCZNVeM",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/NQciXvBQPbU/default.jpg",
        title: "Hablemos del RECHAZO",
        videoId: "NQciXvBQPbU",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/7iobxzd_2wY/default.jpg",
        title:
          "Curso de React [2023]: De cero hasta crear tus primeros componentes con estado",
        videoId: "7iobxzd_2wY",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/p2wF2wRjcN0/default.jpg",
        title:
          "¡No necesitas Redux en React! Aprende a usar Zustand, alternativa sencilla. (Curso de React)",
        videoId: "p2wF2wRjcN0",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/S_oLr_np4S8/default.jpg",
        title:
          "Clon del sitio web de Tesla con HTML, CSS, JavaScript y Tailwind",
        videoId: "S_oLr_np4S8",
      },
      {
        thumbnail: "https://i.ytimg.com/vi/7MvOukJiy_s/default.jpg",
        title: "La PEOR ENTREVISTA DE PROGRAMACIÓN que TUVE",
        videoId: "7MvOukJiy_s",
      },
    ]; */

    return videoList;
  } catch (error) {
    console.log("Error searching videos: ", error);
    return [];
  }
}
