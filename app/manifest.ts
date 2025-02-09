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
        src: "/book-health-pwa.svg",
        sizes: "192x192",
        type: "image/svg",
      },
      {
        src: "/health-pwa.svg",
        sizes: "512x512",
        type: "image/svg",
      },
    ],
  };
}
