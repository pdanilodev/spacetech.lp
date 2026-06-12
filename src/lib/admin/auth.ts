import { adminStore } from "@/lib/admin/store";

const VALID_EMAILS = ["spacetechftc@gmail.com", "admin@spacetech.ftc"];
const VALID_PASSWORD = "spacetech2026";

export function loginAdmin(email: string, password: string): boolean {
  const normalized = email.trim().toLowerCase();
  if (!VALID_EMAILS.includes(normalized) || password !== VALID_PASSWORD) {
    return false;
  }
  const admins = adminStore.getAdmins();
  const user = admins.find((a) => a.email.toLowerCase() === normalized);
  adminStore.setSession({
    email: normalized,
    name: user?.name ?? "Administrador",
  });
  return true;
}

export function logoutAdmin() {
  adminStore.setSession(null);
}

export function isAdminLoggedIn(): boolean {
  return !!adminStore.getSession();
}
