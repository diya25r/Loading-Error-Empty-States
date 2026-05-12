export default function EmptyState({
  title,
  message,
  actionLabel,
  onAction
}) {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2 style={{ marginBottom: "10px" }}>{title || "No Data"}</h2>

      <p style={{ color: "gray", marginBottom: "20px" }}>
        {message || "Nothing to show here"}
      </p>

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          style={{
            padding: "10px 20px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}