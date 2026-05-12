export default function LoadingSpinner({ count = 3 }) {
  return (
    <div style={{ display: "grid", gap: "12px" }}>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px"
            }}
          >
            <div
              style={{
                height: "12px",
                width: "70%",
                background: "#e5e5e5",
                marginBottom: "8px",
                borderRadius: "4px"
              }}
            />
            <div
              style={{
                height: "10px",
                width: "50%",
                background: "#e5e5e5",
                marginBottom: "8px",
                borderRadius: "4px"
              }}
            />
            <div
              style={{
                height: "10px",
                width: "30%",
                background: "#e5e5e5",
                borderRadius: "4px"
              }}
            />
          </div>
        ))}
    </div>
  );
}