function Contact() {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">Get in touch!</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          If you have any questions about my work, please feel free to get in
          contact with via my email below or on LinkedIn. You can also follow my
          GitHub.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-danger btn-lg px-4 gap-3">
            Email me!
          </button>
          <button type="button" class="btn btn-danger btn-lg px-4 gap-3">
            LinkedIn
          </button>
          <button type="button" class="btn btn-warning btn-lg px-4">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
