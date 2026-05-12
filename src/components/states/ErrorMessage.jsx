export default function ErrorMessage({ message, onRetry }) {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2 style={{ marginBottom: "10px" }}>Something went wrong</h2>
      <p style={{ color: "gray", marginBottom: "20px" }}>
        {message || "Please try again later"}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Retry
        </button>
      )}
    </div>
  );
}