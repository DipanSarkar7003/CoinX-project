function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          fontSize: "3rem",
        }}
      >
        error 404 : page not found{" "}
      </h1>
      <br />

      <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
        {" "}
        learn more about{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">
          http errors
        </a>{" "}
      </p>
    </div>
  );
}

export default ErrorPage;
