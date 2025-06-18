import { keycloak } from "shared/keycloak";

export const uploadVideo = (
  url: string,
  method: "POST" | "PATCH",
  data: FormData,
  onProgress: (percentComplete: number) => void,
  onSuccess: () => void,
  onError?: (this: XMLHttpRequestUpload, e: ProgressEvent<XMLHttpRequestEventTarget>) => void
) => {
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
      const percentComplete = Math.trunc((event.loaded / event.total) * 100);
      onProgress(percentComplete);
    }
  });

  xhr.upload.addEventListener("loadend", onSuccess);

  if (onError) {
    xhr.upload.addEventListener("error", onError);
  }

  keycloak.updateToken().then(() => {
    if (keycloak.token) {
      xhr.open(method, url, true);

      xhr.setRequestHeader("Authorization", "Bearer " + keycloak.token);

      xhr.send(data);
    }
  });
};
