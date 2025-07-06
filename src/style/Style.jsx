function Style() {
  return (
    <>
      <div>
        <h1>Portfolio</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "20px",
            padding: "20px",
            backgroundColor: "grey",
            margin: "20px",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src="https://imgs.search.brave.com/mUtJCS-gKLWL6w7REnirxFgmzbxxd4nAY-b1gRXlG4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b2FpZC5jb20vaW1h/Z2VzL2Ntcy9wYXNz/cG9ydF9waWN0dXJl/X3NpemVfNmFiY2Y0/ZjAzZS5qcGc_cXVh/bGl0eT04MCZmb3Jt/YXQ9d2VicCZ3aWR0/aD0xOTIw"
              alt="Passport"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Style;
