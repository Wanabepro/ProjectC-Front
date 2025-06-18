export const processImage = (file: File, canvasRef: React.RefObject<HTMLCanvasElement | null>) => {
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function (e) {
    const img = new Image();

    img.onload = function () {
      const canvas = canvasRef.current;

      if (canvas) {
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, img.width, img.height);
        }
      }
    };

    img.src = e.target!.result as string;
  };
};
