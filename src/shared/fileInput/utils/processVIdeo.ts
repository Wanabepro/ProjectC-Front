export const processVideo = (file: File, canvasRef: React.RefObject<HTMLCanvasElement | null>) => {
  const video = document.createElement("video");
  video.width = 1920;
  video.height = 1080;
  video.src = URL.createObjectURL(file);

  video.addEventListener("loadedmetadata", function () {
    const canvas = canvasRef.current;

    if (canvas) {
      video.currentTime = 0;

      canvas.width = 1920;
      canvas.height = 1080;

      video.addEventListener("seeked", function () {
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        }
      });
    }
  });
};
