const RATE_LIMIT_WINDOW = 60 * 1000; // 1 min
const MAX_REQUESTS = 3;

const ipStore = new Map<string, { count: number; timestamp: number }>();

export function isRateLimited(ip: string) {
  const now = Date.now();
  const record = ipStore.get(ip);

  if (!record) {
    ipStore.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    ipStore.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}