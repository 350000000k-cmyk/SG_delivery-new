import type { CapacitorConfig } from "@capacitor/cli"

const baseUrl = (process.env.DRIVER_APP_URL || "https://sterlinglamslogistics.com/driver").replace(/\/$/, "")

const config: CapacitorConfig = {
  appId: "com.sterlinglams.driver",
  appName: "Sterlin Driver",
  webDir: "www",
  server: {
    url: baseUrl,
    cleartext: baseUrl.startsWith("http://"),
    allowNavigation: ["sterlinglamslogistics.com", "*.sterlinglamslogistics.com"]
  },
  android: {
    allowMixedContent: false,
    appendUserAgent: "SterlinDriverApp"
  }
}

export default config
