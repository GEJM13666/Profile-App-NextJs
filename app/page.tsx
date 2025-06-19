import Image from "next/image";

export default function Home() {
  return (
    <div style={{ maxWidth: 800, margin: "20px auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      <div
        style={{
          fontSize: 18,
          lineHeight: 1.8,
          color: "#2c3e50",
          marginBottom: 40,
          textAlign: "center",
          fontWeight: 400,
        }}
      >
        Hello! I'm{" "}
        <span style={{ background: "#FFD700", padding: "2px 8px", fontWeight: 600, color: "#2c3e50" }}>
          Sakan Wokkum
        </span>
        , also known as{" "}
        <span style={{ background: "#FFD700", padding: "2px 8px", fontWeight: 600, color: "#2c3e50" }}>
          Gun
        </span>
        . I'm currently pursuing a degree in{" "}
        <span style={{ background: "#a8edea", padding: "2px 8px", fontWeight: 600, color: "#2c3e50" }}>
          Computer Science
        </span>
        . I was born on{" "}
        <span style={{ background: "#FFD700", padding: "2px 8px", fontWeight: 600, color: "#2c3e50" }}>
          24th November 2003
        </span>
        , and I'm passionate about technology, programming, and all things tech-related!
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ background: "#f8f9fa", padding: 25, borderLeft: "5px solid #2a5298", marginBottom: 20 }}>
          <h3 style={{ color: "#2a5298", margin: "0 0 20px 0", fontSize: 20, fontWeight: 600 }}>Academic Information</h3>

          <div style={{ marginBottom: 15, fontSize: 16, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 600, color: "#2c3e50", minWidth: 120, display: "inline-block" }}>Faculty:</span>
            <span style={{ color: "#2a5298", fontWeight: 500 }}>🌻Faculty of Science and Digital Innovation</span>
          </div>

          <div style={{ marginBottom: 15, fontSize: 16, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 600, color: "#2c3e50", minWidth: 120, display: "inline-block" }}>Program:</span>
            <span style={{ color: "#2a5298", fontWeight: 500 }}>B.Sc. Computer Science</span>
          </div>

          <div style={{ marginBottom: 15, fontSize: 16, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 600, color: "#2c3e50", minWidth: 120, display: "inline-block" }}>Birth Date:</span>
            <span style={{ color: "#2a5298", fontWeight: 500 }}>24th November 2003</span>
          </div>
        </div>

        <div style={{ background: "#f8f9fa", padding: 25, borderLeft: "5px solid #2a5298" }}>
          <h3 style={{ color: "#2a5298", margin: "0 0 20px 0", fontSize: 20, fontWeight: 600 }}>Personal Information</h3>

          <div style={{ marginBottom: 15, fontSize: 16, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 600, color: "#2c3e50", minWidth: 120, display: "inline-block" }}>MBTI Type:</span>
            <span style={{ color: "#2a5298", fontWeight: 500 }}>INFP</span>
          </div>

          <div style={{ marginBottom: 15, fontSize: 16, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 600, color: "#2c3e50", minWidth: 120, display: "inline-block" }}>Hobbies:</span>
            <span style={{ color: "#2a5298", fontWeight: 500 }}>
              Coding, Gaming, Movies, Podcasts, Tech Exploration
            </span>
          </div>

          <div style={{ marginBottom: 15, fontSize: 16, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 600, color: "#2c3e50", minWidth: 120, display: "inline-block" }}>Favorite Colors:</span>
            <span style={{ color: "#2a5298", fontWeight: 500 }}>Black and Grey</span>
          </div>

          <div style={{ marginBottom: 15, fontSize: 16, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 600, color: "#2c3e50", minWidth: 120, display: "inline-block" }}>Career Goal:</span>
            <span style={{ color: "#2a5298", fontWeight: 500 }}>Whatever I Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}
