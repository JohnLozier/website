import { onCLS, onFCP, onFID, onLCP, onTTFB } from "web-vitals";

import Axios from "axios";
import type { Metric } from "web-vitals";

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

const getConnectionSpeed = () => {
  const isSupported = !!(navigator as any)?.connection?.effectiveType

  return isSupported ? (navigator as any)?.connection?.effectiveType : ""
}

const sendToVercelAnalytics = (metric: Metric) => {
  const body = {
    dsn: import.meta.env.VERCEL_ANALYTICS_ID,
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  }

  const blob = new Blob([new URLSearchParams(body).toString()], {
    type: "application/x-www-form-urlencoded",
  });

  navigator.sendBeacon ?
    navigator.sendBeacon(vitalsUrl, blob) :
    Axios.post(vitalsUrl, {
      body: blob,
      credentials: "omit",
      keepalive: true,
    });
};

const Vitals = () => {
	onCLS(sendToVercelAnalytics);
	onFCP(sendToVercelAnalytics);
	onFID(sendToVercelAnalytics);
	onLCP(sendToVercelAnalytics);
	onTTFB(sendToVercelAnalytics);
};

export default Vitals;