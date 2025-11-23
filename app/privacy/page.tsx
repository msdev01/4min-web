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

export default function PrivacyPage() {
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
            プライバシーポリシー
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, mb: 2, fontSize: 13 }}
          >
            本プライバシーポリシーは，本アプリ「4min」（以下「本アプリ」といいます。）におけるユーザー情報の取扱いについて定めるものです。
          </Typography>

          {/* 1. 収集する情報 */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            1. 収集する情報
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            本アプリは，ログイン機能やアカウント登録機能を有しておらず，
            ユーザーの氏名・メールアドレス・位置情報などの個人情報を，
            アプリ外のサーバーへ送信・保存することはありません。
          </Typography>

          {/* 2. 端末内で扱う情報 */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            2. 端末内で扱う情報
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            本アプリ内で設定したテーマカラーなどの設定情報は，
            端末内のストレージに保存されます。これらの情報は，
            ユーザーの端末内でのみ利用され，開発者が管理するサーバー等の外部に送信されることはありません。
          </Typography>

          {/* 3. 第三者提供 */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            3. 第三者提供
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            本アプリは，取得した情報を第三者に提供することはありません。
          </Typography>

          {/* 4. 外部サービスの利用 */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            4. 外部サービスの利用
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            現時点で，本アプリは，広告配信サービスやアクセス解析サービス等の外部サービスを利用していません。
            将来的に外部サービスを導入する場合は，本ポリシーを更新のうえ，収集される情報の内容と目的を明示します。
          </Typography>

          {/* 5. お問い合わせ */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            5. お問い合わせ
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            本ポリシーに関するお問い合わせは，Xアカウント（@4min_app）または
            Instagramアカウント（@4min_app）へのDMにて受け付けます。
          </Typography>

          {/* 6. プライバシーポリシーの変更 */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mt: 4, mb: 1, fontSize: 16 }}
          >
            6. プライバシーポリシーの変更
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#d1d5db", lineHeight: 1.8, fontSize: 13 }}
          >
            本ポリシーの内容は，必要に応じて変更されることがあります。
            重要な変更がある場合は，本アプリ内にてお知らせします。
            変更後のプライバシーポリシーは，本アプリ内に表示された時点より適用されます。
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
