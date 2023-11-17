/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: "mongodb://172.17.0.2:27017/papitamatch_db",
    NEXTAUTH_SECRET: "codingwithabbas",

    GOOGLE_CLIENT_ID:
      "521465003775-u12cuao3tp7jfusjvk6j8h9233tvk45j.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",

    GITHUB_ID: "b4d18396ed3611d8f8ac",
    GITHUB_SECRET: "1779a43f7d4d4f3256197e8575242acf325cb569",
  },
};

module.exports = nextConfig;
