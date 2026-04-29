import { useState } from "react";

const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4.03 7.28a.75.75 0 0 0-1.06-1.06l-4.22 4.22-1.72-1.72a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.75-4.75Z"
      fill="#48BB78"
    />
  </svg>
);

const LogoIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect x="4" y="4" width="36" height="36" rx="4" fill="#010820" />
    <path d="M14 14h16v4H14v-4Zm0 6h10v4H14v-4Zm0 6h16v4H14v-4Z" fill="white" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const benefits = [
  "₹n free credits",
  "Free chatroom access",
  "No credit card required",
  "Instant access to multilingual AI",
];

export default function SignupPage() {
  const [email, setEmail] = useState("");

  return (
    <div style={styles.container}>
      {/* Left Section - Form */}
      <div style={styles.leftPanel}>
        {/* Logo & Heading */}
        <div style={styles.headerBlock}>
          <div style={styles.logoWrapper}>
            <LogoIcon />
          </div>
          <h1 style={styles.heading}>
            India's{" "}
            <span style={styles.headingItalic}>Multilingual</span> AI
          </h1>
          <p style={styles.subtitle}>
            Work, think, and create in your language.
          </p>
        </div>

        {/* Auth Section */}
        <div style={styles.authSection}>
          {/* Google Button */}
          <div style={styles.googleBlock}>
            <button style={styles.googleBtn}>
              <GoogleIcon />
              Continue with Google
            </button>
            <p style={styles.googleHint}>
              Take less than 10 seconds. No card required
            </p>
          </div>

          {/* Divider */}
          <div style={styles.divider}>
            <div style={styles.dividerLine} />
            <span style={styles.dividerText}>or</span>
            <div style={styles.dividerLine} />
          </div>

          {/* Email Form */}
          <div style={styles.emailForm}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>
            <button style={styles.continueBtn}>Continue</button>
          </div>
        </div>

        {/* Benefits */}
        <div style={styles.benefitsBlock}>
          <p style={styles.benefitsTitle}>When you join, you get:</p>
          <div style={styles.benefitsList}>
            {benefits.map((text, i) => (
              <div key={i} style={styles.benefitRow}>
                <CheckCircleIcon />
                <span style={styles.benefitText}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Multilingual Hero */}
      <div style={styles.rightPanel}>
        <div style={styles.heroBg} />
        <div style={styles.heroOverlay} />
        <div style={styles.heroTextStack}>
          <span style={styles.helloEn}>Hello</span>
          <span style={styles.helloHi}>नमस्ते</span>
          <span style={styles.helloBn}>হ্যালো</span>
          <span style={styles.helloMl}>ഹലോ</span>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1752px",
    margin: "48px auto 0",
    padding: "0 24px",
    minHeight: "calc(100vh - 96px)",
  },

  /* Left Panel */
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "32px",
    width: "100%",
    maxWidth: "500px",
    flexShrink: 0,
  },

  /* Header */
  headerBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  logoWrapper: {
    width: "85px",
    height: "85px",
    borderRadius: "35px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: 500,
    letterSpacing: "-0.64px",
    lineHeight: 1.3,
    textAlign: "center",
    color: "#010820",
    margin: "0 0 4px",
  },
  headingItalic: {
    fontFamily: "'IBM Plex Serif', serif",
    fontStyle: "italic",
    color: "#4A5568",
  },
  subtitle: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#4A5568",
    textAlign: "center",
    margin: 0,
  },

  /* Auth */
  authSection: {
    display: "flex",
    flexDirection: "column",
    gap: "29px",
    width: "360px",
    maxWidth: "100%",
  },
  googleBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  googleBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #E2E8F0",
    borderRadius: "8px",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "20px",
    color: "#010820",
    fontFamily: "inherit",
  },
  googleHint: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: 1.4,
    color: "#718096",
    textAlign: "center",
    margin: 0,
  },

  /* Divider */
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    width: "100%",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    backgroundColor: "#E2E8F0",
  },
  dividerText: {
    fontSize: "12px",
    fontWeight: 500,
    color: "#A0AEC0",
    lineHeight: 1.4,
  },

  /* Email */
  emailForm: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  label: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: "#4A5568",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #E2E8F0",
    borderRadius: "8px",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#010820",
    outline: "none",
    boxSizing: "border-box" as const,
    backgroundColor: "#fff",
    fontFamily: "inherit",
  },
  continueBtn: {
    width: "100%",
    padding: "10px 12px",
    backgroundColor: "#010820",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "20px",
    cursor: "pointer",
    textAlign: "center" as const,
    fontFamily: "inherit",
  },

  /* Benefits */
  benefitsBlock: {
    width: "360px",
    maxWidth: "100%",
  },
  benefitsTitle: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#4A5568",
    margin: "0 0 12px",
  },
  benefitsList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  benefitRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },
  benefitText: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#4A5568",
  },

  /* Right Panel */
  rightPanel: {
    position: "relative",
    width: "841px",
    height: "984px",
    borderRadius: "32px",
    overflow: "hidden",
    flexShrink: 0,
  },
  heroBg: {
    position: "absolute",
    inset: 0,
    borderRadius: "32px",
    background:
      "linear-gradient(135deg, #0a1628 0%, #1a2744 30%, #0d1a30 60%, #162238 100%)",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    borderRadius: "32px",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  heroTextStack: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  helloEn: {
    fontSize: "154px",
    fontWeight: 400,
    letterSpacing: "-3.08px",
    lineHeight: 1.3,
    color: "#fff",
    textAlign: "center",
  },
  helloHi: {
    fontSize: "101px",
    fontWeight: 400,
    letterSpacing: "-2px",
    lineHeight: 1.3,
    color: "#fff",
    opacity: 0.8,
    textAlign: "center",
    fontFamily: "'Noto Sans Devanagari', sans-serif",
  },
  helloBn: {
    fontSize: "80px",
    fontWeight: 400,
    letterSpacing: "-1.6px",
    lineHeight: 1.3,
    color: "#fff",
    opacity: 0.4,
    textAlign: "center",
    fontFamily: "'Noto Sans Bengali', sans-serif",
  },
  helloMl: {
    fontSize: "49px",
    fontWeight: 400,
    letterSpacing: "-1px",
    lineHeight: 1.3,
    color: "#fff",
    opacity: 0.2,
    textAlign: "center",
    fontFamily: "'Noto Sans Malayalam', sans-serif",
  },
};
