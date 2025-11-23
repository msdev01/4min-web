"use client";

import {
  Box,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
  Link,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', sans-serif",
  },
  palette: {
    mode: "dark",
    primary: { main: "#3B82F6" },
    background: {
      default: "#020617",
      paper: "#020617",
    },
  },
});

export default function TermsPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "#fff",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          {/* 上部ロゴ＋戻るリンク */}
          <Box
            sx={{
              mb: 6,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
              <Box component="span" sx={{ color: "#E91E63" }}>
                i
              </Box>
              <Box component="span" sx={{ color: "#3B82F6" }}>
                n
              </Box>
            </Typography>
            <Link
              href="/"
              underline="hover"
              sx={{ color: "#93c5fd", fontSize: 14 }}
            >
              ← トップへ戻る
            </Link>
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            利用規約
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, mb: 2, fontSize: 13 }}
          >
            この利用規約（以下，「本規約」といいます。）は，本アプリ「4min」
            （以下，「本アプリ」といいます。）の利用条件を定めるものです。
            本アプリをご利用になる前に，本規約をよくお読みください。
          </Typography>

          {/* 第1条（適用） */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            第1条（適用）
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            本規約は，ユーザーと本アプリの開発者（以下，「開発者」といいます。）との間の，
            本アプリの利用に関わる一切の関係に適用されるものとします。
          </Typography>

          {/* 第2条（禁止事項） */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            第2条（禁止事項）
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, whiteSpace: "pre-line", fontSize: 13 }}
          >
            ユーザーは，本アプリの利用にあたり，以下の行為をしてはなりません。
            {"\n"}・法令または公序良俗に違反する行為
            {"\n"}・本アプリの運営を妨害する行為
            {"\n"}・本アプリを不正な目的で利用する行為
            {"\n"}・本アプリを逆コンパイル・リバースエンジニアリングする行為
          </Typography>

          {/* 第3条（免責事項） */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            第3条（免責事項）
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            本アプリは，学習や作業の補助を目的としたタイマーアプリであり，
            特定の学業成績・業務成果などを保証するものではありません。
            また，本アプリの利用に関連してユーザーに生じた損害について，
            開発者は一切の責任を負いません（開発者の故意または重過失による場合を除きます）。
          </Typography>

          {/* 第4条（知的財産権） */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            第4条（知的財産権）
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            本アプリに関するプログラム，デザイン，ロゴ等に関する著作権その他の知的財産権は，
            開発者に帰属します。ユーザーは，開発者の許可なく，これらを複製・改変・再配布等してはなりません。
          </Typography>

          {/* 第5条（規約の変更） */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            第5条（規約の変更）
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            開発者は，必要と判断した場合には，ユーザーに通知することなく本規約の内容を変更することができます。
            変更後の規約は，本アプリ上に表示された時点で効力を生じるものとします。
          </Typography>

          {/* 第6条（お問い合わせ） */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            第6条（お問い合わせ）
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            本アプリおよび本規約に関するお問い合わせは，Xアカウント（@4min_app）
            またはInstagramアカウント（@4min_app）へのDMにて受け付けます。
          </Typography>

          {/* 第7条（準拠法） */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            第7条（準拠法）
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            本規約の解釈にあたっては，日本法を準拠法とします。
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
