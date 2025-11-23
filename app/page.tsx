"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// ===== MUI テーマ設定 =====
const theme = createTheme({
  typography: {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', sans-serif",
  },
  palette: {
    mode: "dark",
    primary: { main: "#3B82F6" }, // 統一アクセントカラー
    background: {
      default: "#020617",
      paper: "#020617",
    },
  },
});

const Page: React.FC = () => {
  // セクションへのスムーススクロール
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const features = [
    {
      title: "4分専用タイマー",
      desc: "時間設定で迷わず、ワンタップで「まず4分だけ」始められます。",
    },
    {
      title: "「もう少し頑張る」延長",
      desc: "4分終了後に +4 / +8 / +12 / +16 分から延長時間を選べます。",
    },
    {
      title: "テーマカラー切替",
      desc: "集中モード（ダーク）とクリアモード（ライト）を気分に合わせて切り替え。",
    },
    {
      title: "シンプルな画面設計",
      desc: "ごちゃごちゃした機能は一切なし。タイマーと最低限の設定だけ。",
    },
    {
      title: "静かな通知",
      desc: "作業の流れを途切れさせない、控えめな通知設計を目指しています。",
    },
    {
      title: "オフライン対応",
      desc: "インターネット接続がなくてもタイマーとして利用できます。",
    },
  ];

  const faqItems = [
    {
      q: "なぜ4分なの？",
      a: "「とりあえずやる」ハードルを下げるために、長すぎず短すぎない時間として4分を採用しています。4分だけなら、やる気が出ない日でも動き出しやすくなります。",
    },
    {
      q: "延長時間は変更できる？",
      a: "4分が終わったあとに、+4 / +8 / +12 / +16 分の中から延長時間を選べます。現時点のバージョンでは、任意の分数を入力するカスタム機能はありません。",
    },
    {
      q: "データはどこかに送信される？",
      a: "4min にはログイン機能やアカウント登録はありません。氏名・メールアドレス・位置情報などの個人情報を外部サーバに送信することはなく、端末内にはテーマ設定など最小限の情報のみ保存されます。",
    },
    {
      q: "利用料金は？",
      a: "4min は無料でお使いいただけます。今後のアップデートも、基本的なタイマー機能は無料で提供する方針です。",
    },
    {
      q: "どの端末で使える？",
      a: "現在は Android 向けに Google Play ストアでの配信を準備中です。iOS 版については今後の検討事項です。",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          color: "#ffffff",
        }}
      >
        {/* ===== ナビゲーションバー ===== */}
        <Box
          component="header"
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            bgcolor: "rgba(2,6,23,0.95)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid #0f172a",
          }}
        >
          <Container
            sx={{
              py: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* 4min ロゴ（i / n の色指定、詰めて表示） */}
            <Typography
              variant="h6"
              sx={{
                fontFamily:
                  "'SF Pro Display','SF Pro Text', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 700,
                letterSpacing: 0,
                textTransform: "none",
              }}
            >
              4m
              <Box
                component="span"
                sx={{ color: "#E91E63", display: "inline" }}
              >
                i
              </Box>
              <Box
                component="span"
                sx={{ color: "#3B82F6", display: "inline" }}
              >
                n
              </Box>
            </Typography>

            <Box
              component="nav"
              sx={{
                display: "flex",
                gap: 2,
                fontSize: 14,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="#hero"
                underline="none"
                sx={{ color: "#cbd5f5", cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
              >
                TOP
              </Link>
              <Link
                href="#features"
                underline="none"
                sx={{ color: "#cbd5f5", cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("features");
                }}
              >
                特徴
              </Link>
              <Link
                href="#faq"
                underline="none"
                sx={{ color: "#cbd5f5", cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("faq");
                }}
              >
                よくある質問
              </Link>
            </Box>
          </Container>
        </Box>

        {/* ===== Hero セクション ===== */}
        <Box
          id="hero"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            background:
              "radial-gradient(circle at top, #1d4ed8 0, #020617 50%, #000000 100%)",
            pt: { xs: 10, md: 8 },
            pb: 6,
          }}
        >
          <Container>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.2rem", md: "3.2rem" },
              }}
            >
              やる気が出ない日も、4分だけなら動き出せる。
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#e5e7eb",
                mb: 4,
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.05rem" },
              }}
            >
              4min は「まず4分だけやる」に特化したシンプルなタイマーアプリです。
              <br />
              勉強・家事・リスキリングなど、やり始めが重い作業の一歩目を後押しします。
            </Typography>

            <Button
              variant="contained"
              onClick={() => scrollToSection("features")}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "1rem",
                backgroundColor: "#3B82F6",
                color: "#0b1120",
                boxShadow: "0 0 24px rgba(59,130,246,0.7)",
                "&:hover": {
                  backgroundColor: "#2563EB",
                  boxShadow: "0 0 30px rgba(37,99,235,0.85)",
                },
              }}
            >
              ダウンロードする
            </Button>

            <Typography
              variant="body2"
              sx={{ color: "#9ca3af", mt: 2, fontSize: 12 }}
            >
              ※ Google Play ストア公開後は、このボタンからストアページへ遷移させる予定です。
            </Typography>
          </Container>
        </Box>

        {/* ===== 特徴 ===== */}
        <Box
          id="features"
          component="section"
          sx={{ py: 10, backgroundColor: "#020617" }}
        >
          <Container>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 4,
                textAlign: "center",
                fontSize: { xs: "2rem", md: "2.4rem" },
              }}
            >
              4min の特徴
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {features.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      background:
                        "linear-gradient(135deg, #020617 0%, #0f172a 60%, rgba(59,130,246,0.2) 100%)",
                      border: "1px solid rgba(148,163,184,0.3)",
                      boxShadow: "0 12px 30px rgba(15,23,42,0.9)",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 1.2 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#d1d5db", lineHeight: 1.7 }}
                      >
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ===== FAQ ===== */}
        <Box
          id="faq"
          component="section"
          sx={{ py: 10, backgroundColor: "#020617" }}
        >
          <Container>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 6,
                textAlign: "center",
                fontSize: { xs: "2rem", md: "2.4rem" },
              }}
            >
              よくある質問
            </Typography>

            <Box
              sx={{
                maxWidth: 900,
                mx: "auto",
              }}
            >
              {faqItems.map((faq, i) => (
                <Accordion
                  key={i}
                  sx={{
                    mb: 1.5,
                    bgcolor: "#020617",
                    color: "#e5e7eb",
                    borderRadius: 2,
                    border: "1px solid #1e293b",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#9ca3af" }} />}
                    sx={{
                      px: 2.5,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, fontSize: 15 }}
                    >
                      {faq.q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: 2.5,
                      pt: 0,
                      pb: 2.2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#cbd5f5", lineHeight: 1.8, fontSize: 13 }}
                    >
                      {faq.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== フッター ===== */}
        <Box
          component="footer"
          sx={{
            mt: 4,
            pt: 4,
            pb: 3,
            background:
              "radial-gradient(circle at top, rgba(59,130,246,0.15) 0, #020617 45%, #000000 100%)",
            borderTop: "1px solid #111827",
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 4,
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily:
                    "'SF Pro Display','SF Pro Text', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontWeight: 700,
                  letterSpacing: 0,
                  textTransform: "none",
                  mb: 1,
                }}
              >
                4m
                <Box
                  component="span"
                  sx={{ color: "#E91E63", display: "inline" }}
                >
                  i
                </Box>
                <Box
                  component="span"
                  sx={{ color: "#3B82F6", display: "inline" }}
                >
                  n
                </Box>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#9ca3af", maxWidth: 360, fontSize: 13 }}
              >
                「まず4分だけやる」を習慣にするためのタイマーアプリ
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                gap: { xs: 3, md: 1.5 },
                alignItems: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1.2,
                  flexDirection: { xs: "column", sm: "row", md: "column" },
                }}
              >
                <Button
                  href="/terms"
                  size="small"
                  variant="text"
                  sx={{
                    color: "#93c5fd",
                    textTransform: "none",
                    fontSize: 13,
                    px: 0,
                    minWidth: 0,
                    "&:hover": { color: "#bfdbfe", background: "transparent" },
                  }}
                >
                  利用規約
                </Button>
                <Button
                  href="/privacy"
                  size="small"
                  variant="text"
                  sx={{
                    color: "#93c5fd",
                    textTransform: "none",
                    fontSize: 13,
                    px: 0,
                    minWidth: 0,
                    "&:hover": { color: "#bfdbfe", background: "transparent" },
                  }}
                >
                  プライバシーポリシー
                </Button>
              </Box>
            </Box>
          </Container>

          <Container
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 1.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#6b7280", fontSize: 11 }}
            >
              © 2025 4min
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#4b5563", fontSize: 11 }}
            >
              Built for tiny starts and long runs.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Page;
