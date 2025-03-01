import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Seu passaporte para sua saúde",
    short_name: "Sua agenda",
    description:
      "Organize e acesse facilmente seu histórico de consultas, exames e cirurgias com o Histórico de Saúde, disponível offline e com armazenamento seguro.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/assets/logo/logo48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/assets/logo/logo72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/assets/logo/logo96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/assets/logo/logo128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/assets/logo/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/logo/logo256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/assets/logo/logo384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/assets/logo/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Abrir Histórico de Saúde",
        short_name: "Histórico",
        description: "Acesse rapidamente seu histórico de saúde",
        url: "/historico",
        icons: [
          {
            src: "/assets/logo/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    ],
    screenshots: [
      {
        src: "/assets/screenshots/screenshot1.png",
        sizes: "1080x1920",
        type: "image/png",
      },
      {
        src: "/assets/screenshots/screenshot2.png",
        sizes: "1080x1920",
        type: "image/png",
      },
    ],
    prefer_related_applications: false,
    related_applications: [],
  };
}
