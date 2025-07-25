export default function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new CustomUploadAdapter(loader);
  };
}

class CustomUploadAdapter {
  constructor(loader) {
    this.loader = loader;
    this.url = "http://localhost:8081/api/uploads/image"; // API upload ảnh
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("file", file);

          fetch(this.url, {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              resolve({ default: data.url }); // đường dẫn ảnh được trả về
            })
            .catch((err) => reject(err));
        })
    );
  }

  abort() {
    // Optional: Xử lý khi upload bị huỷ
  }
}
