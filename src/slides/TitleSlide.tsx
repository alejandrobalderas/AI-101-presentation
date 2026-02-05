import { Slide } from "spectacle";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

export function TitleSlide() {
  return (
    <Slide backgroundColor={theme.colors.background}>
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          padding: "60px",
          gap: "48px",
        }}
      >
        {/* Left side - Main title area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Workshop badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontFamily: theme.fonts.body,
                fontWeight: 600,
                color: theme.colors.primary,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                padding: "8px 14px",
                background: `${theme.colors.primary}10`,
                borderRadius: "6px",
                marginBottom: "24px",
              }}
            >
              Live Workshop
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "72px",
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              color: theme.colors.text,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            AI 101 for
            <br />
            <span style={{ color: theme.colors.primary }}>
              Content Creators
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "20px",
              fontFamily: theme.fonts.body,
              color: theme.colors.textMuted,
              marginTop: "24px",
              fontWeight: 400,
              lineHeight: 1.5,
              whiteSpace: "nowrap",
            }}
          >
            Everything you need to know, nothing you don't.
          </motion.p>

          {/* Host info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              marginTop: "48px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: theme.colors.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "white",
                  fontFamily: theme.fonts.heading,
                }}
              >
                AB
              </span>
            </div>
            <div>
              <p
                style={{
                  fontSize: "15px",
                  fontFamily: theme.fonts.heading,
                  fontWeight: 600,
                  color: theme.colors.text,
                  margin: 0,
                }}
              >
                Alejandro Balderas
              </p>
              <p
                style={{
                  fontSize: "13px",
                  fontFamily: theme.fonts.body,
                  color: theme.colors.textMuted,
                  margin: "2px 0 0 0",
                }}
              >
                Your host today
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right side - Quote card & details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "24px",
            borderLeft: `1px solid ${theme.colors.glassBorder}`,
          }}
        >
          {/* The driver analogy card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                background: theme.colors.surface,
                padding: "32px",
                borderRadius: "20px",
                border: `1px solid ${theme.colors.glassBorder}`,
                boxShadow: theme.shadows.lg,
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  fontFamily: theme.fonts.heading,
                  fontWeight: 600,
                  color: theme.colors.text,
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                The best AI users didn't learn to build it, they learned to use
                it.
              </p>
            </div>
          </motion.div>

          {/* Event details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
              marginTop: "32px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontFamily: theme.fonts.body,
                color: theme.colors.textMuted,
                margin: 0,
                letterSpacing: "0.02em",
              }}
            >
              February 6th, 2025
              <span
                style={{
                  margin: "0 12px",
                  opacity: 0.4,
                }}
              >
                •
              </span>
              12:00 PM ET
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
